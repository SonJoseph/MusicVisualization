from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    return "jade tries commit Go to /amplitudeGraph or /frequency to see some cool stuff ... wow!"

@app.route('/amplitudeGraph')
def amplitudeGraph():
    return render_template("amplitudeGraph.html")

@app.route('/frequency')
def frequency():
    return render_template("frequency.html")

if __name__ == '__main__':
   app.run('127.0.0.1', 8000, debug = True)
