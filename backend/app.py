from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# 🔥 THIS LINE IS THE REAL FIX
CORS(app, resources={r"/api/*": {"origins": "*"}})

projects = [
    {
        "id": 1,
        "title": "Portfolio Website",
        "description": "A single page portfolio project",
        "image": "image/IMG_6906.JPG",
        "live": "https://josephine1998.github.io/my_portfolio/"
    },
    {
        "id": 2,
        "title": "Birthday Website",
        "description": "A fun birthday project",
        "image": "image/IMG_6779.png",
        "live": "https://josephine1998.github.io/joshua-Birthday/"
    }
]

@app.route("/api/projects")
def get_projects():
    return jsonify(projects)

if __name__ == "__main__":
    app.run(debug=True)