import mysql.connector as sqltor

mycon = sqltor.connect(host="localhost", user="root", password="", database="hackoverse24")
if mycon.is_connected():
    print("succes")
cursor = mycon.cursor()
from flask import Flask, render_template, request
import pymysql

app = Flask(__name__)

# Configure MySQL
conn = pymysql.connect(host='localhost',
                       user='username',
                       password='password',
                       db='hackoverse24',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        # Get form data
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        # Store data in database
        try:
            with conn.cursor() as cursor:
                sql = "INSERT INTO form_data (name, email, password) VALUES (%s, %s, %s)"
                cursor.execute(sql, (name, email, password))
                conn.commit()
        except Exception as e:
            print(f"Error: {e}")

        return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)
