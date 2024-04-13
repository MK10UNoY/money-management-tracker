import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

# creating flask app
app = Flask(__name__)

# Load the pickle model
model = pickle.load(open("tree1.pkl", "rb"))

@app.route("/")
def Home():
    return render_template("index.html")

# # prediction function
# def ValuePredictor(to_predict_list):
# 	to_predict = np.array(to_predict_list).reshape(1, 12)
# 	loaded_model = pickle.load(open("tree1.pkl", "rb"))
# 	result = loaded_model.predict(to_predict)
# 	return result[0]
#
# @app.route('/result', methods = ['POST'])
# def result():
# 	if request.method == 'POST':
# 		to_predict_list = request.form.to_dict()
# 		to_predict_list = list(to_predict_list.values())
# 		to_predict_list = list(map(int, to_predict_list))
# 		result = ValuePredictor(to_predict_list)
# 		if int(result)== 1:
# 			prediction ='Income more than 50K'
# 		else:
# 			prediction ='Income less that 50K'
# 		return render_template("result.html", prediction = prediction)

@app.route("/predict", methods=["POST"])
def predict():
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)
    return render_template("index.html", prediction_text="The result is {}".format(prediction))


if __name__ == "__main__":
    app.run(debug=False)
