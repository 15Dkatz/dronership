import org.json.*;


// REFERENCE: http://stackoverflow.com/questions/2591098/how-to-parse-json-in-java
class WeatherJsonParse {
    JSONObject json;


    public WeatherJsonParse(String jsontxt) throws JSONException {
        json = new JSONObject(jsontxt);
    }

    public Double getTemperature() throws JSONException {
        //return json.getJSONObject("current_observation").getJSONObject("display_location").getString("full");
        return pollJSON(true, "current_location", "display_location", "full");
    }

    public Double getHumidity() throws JSONException {

        //return json.getJSONObject("current_observation").getString("relative_humidity");
        return pollJSON(true, "current_location", "relative_humidity");
    }

    public Double getGustMPH() throws JSONException {
        //return json.getJSONObject("current_observation").getString("wind_gust_mph");
        return pollJSON(true, "current_location", "wind_gust_mph");
    }

    public Double getGustKPH() throws JSONException {
        //return json.getJSONObject("current_observation").getString("wind_gust_kph");
        return pollJSON(true, "current_location", "wind_gust_kph");
    }

    public Double getWindSpdMPH() throws JSONException {
        //return json.getJSONObject("current_observation").getString("wind_mph");
        return pollJSON(true, "current_location", "wind_mph");
    }

    public String getWindSpdKPH() throws JSONException {
        //return json.getJSONObject("current_observation").getString("wind_kph");
        return pollJSON("current_location", "wind_kph");
    }

    public Double getPressure() throws JSONException {
        //return json.getJSONObject("current_observation").getString("pressure_mb");
        return pollJSON(true, "current_location", "pressure_mb");
    }

    public Double getElevation() throws JSONException {
        //return json.getJSONObject("current_observation").getJSONObject("observation_location").getString("elevation");
        return pollJSON(true, "current_location", "observation_location", "elevation");
    }

    public String getWeather() throws JSONException {
        //return json.getJSONObject("current_observation").getString("weather");
        return pollJSON("current_location", "weather");
    }

    public Double getWindDegrees() throws JSONException {
        //return json.getJSONObject("current_observation").getString("wind_degrees");
        return pollJSON(true, "current_location", "wind_degrees");
    }

    // Get visibility
    public String getVisibility() throws JSONException {
        return pollJSON("current_observation", "visibility");
    }


    private String pollJSON(String topLevel, String nextLevel, String element) throws JSONException {
        return json.getJSONObject(topLevel).getJSONObject(nextLevel).getString(element);
    }

    private Double pollJSON(boolean isDouble, String topLevel, String nextLevel, String element) throws JSONException {
        return json.getJSONObject(topLevel).getJSONObject(nextLevel).getDouble(element);
    }

    private String pollJSON(String topLevel, String element) throws JSONException {
        return json.getJSONObject(topLevel).getString(element);
    }

    private Double pollJSON(boolean isDouble, String topLevel, String element) throws JSONException {
        return json.getJSONObject(topLevel).getDouble(element);
    }
    //private String pollJSONVAR(String ...params) throws JSONException {
    //    jsonObject obj;
    //    for (int i = 0; i < params.length; i++) {
    //        if (i != params.length) {
    //            obj = obj.getJSONObject(params[i]);
    //        } else {
    //            return obj.getString(param[i])
    //        }
    //    }
    //}

}
