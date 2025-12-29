import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)

conn = mysql.connector.connect(
    host= 'localhost',
    user= 'root',
    password= 'Pmokotedi18!',
    database= 'salon'
)

# note: create cursors per-request to avoid closing global cursor prematurely

date_Library = []
time_Library = []

@app.route('/booking/validation', methods=['GET'])
def validate_specialist_availability():
    specialist_name = request.args.get("specialist")

    try:
        # create a cursor for this request
        cur = conn.cursor()
        cur.execute('SELECT appointmentDate, appointmentTime FROM Appointments WHERE specialist = %s', (specialist_name,))
        queryResults = cur.fetchall()

        # reset libraries for each request
        date_Library.clear()
        time_Library.clear()

        for (appointmentDate, appointmentTime,) in queryResults:
            # handle date that might already be a date object
            if isinstance(appointmentDate, datetime.datetime):
                date_Library.append(appointmentDate.date().isoformat())
            elif isinstance(appointmentDate, datetime.date):
                date_Library.append(appointmentDate.isoformat())
            else:
                dt = datetime.datetime.strptime(str(appointmentDate), '%Y-%m-%d')
                date_Library.append(dt.date().isoformat())

            if isinstance(appointmentTime, datetime.time):
                time_str = appointmentTime.strftime('%H:%M:%S')
            else:
                time_str = str(appointmentTime)
            time_Library.append(time_str)

        cur.close()
        return jsonify({"success": True, "dates": date_Library, "times": time_Library})
    except Exception as err:
        return jsonify({"success": False, "error": str(err)}), 500
