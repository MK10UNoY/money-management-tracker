from flask import Flask, request, jsonify, render_template
import mysql.connector as sqltor

mycon = sqltor.connect(host="localhost", user="root", password="", database="hackoverse24")
if mycon.is_connected():
    print("succes")
cursor = mycon.cursor()
st = "SELECT * FROM `mainak_expenses_daily` ORDER BY `sl_no` DESC LIMIT 7;"
cursor.execute(st)
data = cursor.fetchall()
# count=cursor.rowcount
# print("total number of rows retrieved in datasheet:",count)
# for row in a:
#    print(row)
# for row in data:
#     print(row)
print(data)

# creating flask app
app = Flask(__name__)

@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/userdashboard.html")
def userdashboard():
    return render_template("userdashboard.html", data1 = data[0][7], data2 = data[1][7], data3 = data[2][7], data4 = data[3][7], data5 = data[4][7], data6 = data[5][7], data7 = data[6][7])


if __name__ == "__main__":
    app.run(debug=False)
