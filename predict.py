from os import name
from flask import Flask
 
app = Flask(__name__)

@app.route("/predi")
def prediction():
    return {"bitcoin" : ["1234","24","35","5"]}


if __name__ == "__main__":
    app.run(debug=True)