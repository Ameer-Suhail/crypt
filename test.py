import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from pandas.core import indexing
from pandas.core.indexes.base import Index
import seaborn as sns
from seaborn import regression
sns.set()
plt.style.use('seaborn-whitegrid')
import yfinance as yf
from datetime import date, datetime, timedelta

today = date.today()
diff = timedelta(300)
start = today-diff
data = yf.download('BTC-INR', 
                      start=start, 
                      end=today, 
                      progress=False,
)
data.head()


print("Shape of Dataset is: ",data.shape,"\n")
print(data.head())

data.dropna()


df = pd.DataFrame(data,index=data.index)
df['date'] = pd.to_datetime(df.index)

from autots import AutoTS
model = AutoTS(forecast_length=10, frequency='infer', ensemble='simple', drop_data_older_than_periods=200)
model = model.fit(df, date_col='date', value_col='Close', id_col=None)
 
prediction = model.predict()
forecast = prediction.forecast
print("Bitcoin Price Prediction")

print(forecast)
print(type(forecast))
forecast.to_csv('bit10.csv')
plt.figure(figsize=(16, 6))
plt.title("Predicted Price INR")
plt.xlabel("Date")
plt.ylabel("Close")
plt.plot(forecast["Close"])
plt.savefig('bittdy.png')
plt.show()

