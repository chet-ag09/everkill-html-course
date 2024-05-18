from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
  # Logic to determine available lessons
    lessons = os.listdir("templates/lessons")  
    return render_template("index.html", lessons=lessons)

@app.route("/lessons/<lesson_name>")
def show_lesson(lesson_name):
    lesson_path = os.path.join("templates", "lessons", lesson_name)
    if os.path.isfile(lesson_path):
        return render_template("lessons/" + lesson_name)  
    else:
        # Handlin the case of non-existent lesson
        return f"Lesson '{lesson_name}' not found!"
  
if __name__ == "__main__":
  app.run(debug=True)
