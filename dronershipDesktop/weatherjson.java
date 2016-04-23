import org.json.*;


// REFERENCE: http://stackoverflow.com/questions/2591098/how-to-parse-json-in-java
public class WeatherJsonParse {
  JSONObject json;
  public static WeatherJsonParse(String jsontxt) {
    json = new JSONObject(jsontxt);
  }
  public String getTemperature() {
   return json.getJSONObject("current_observation").getJSONObject("display_location").getString("full");
  }
  public String getHumidity() {

  }
  public String getGust() {

  }
  public String getWindSpd() {

  }
  public String getPressure() {

  }
  public String getElevation() {

  }
  public String getWeather() {

  }
  public String getWindDegrees() {

  }
  // Get Pressure
  // Get visibility
  // Get precipitation

}
