from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/education")
def education():
    return render_template("edu.html")


@app.route("/experience")
def experience():
    return render_template("work.html")


@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")
