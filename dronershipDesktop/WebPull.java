import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class WebPull {
    // Constructor
    WebPull() {
      /// nothing yet
    }

    // HTTP Call for weather API
    public static String HttpCallWeather(double longitude, double latitude) {
      //// CODE FOR HTTP API CALLS
      // These two need to be declared outside the try/catch
      // so that they can be closed in the finally block.
      HttpURLConnection urlConnection = null;
      BufferedReader reader = null;

      // Will contain the raw JSON response as a string.
      String forecastJsonStr = null;
      // Paramaters to use in URI builder.
      String format = "json";
      String units = "metric";
      int days = 7;

      try {
          // Construct the URL for the wunderground query
          // Possible parameters are available at wunderground API page, at
          // "http://api.wunderground.com/api/APIKEY/conditions/q/37.8,-122.4.json"
          final String FORECAST_BASE_URL =
              "http://api.wunderground.com/api/";
          final String QUERY_PARAM = "q";
          final String KEY = "06dfbc32cb33068b";
          URL url = new URL(FORECAST_BASE_URL + "/" + KEY + "/conditions/q/" +
                  String.valueOf(latitude) + "," + String.valueOf(longitude)+".json");
          // Create the request to OpenWeatherMap, and open the connection
          urlConnection = (HttpURLConnection) url.openConnection();
          urlConnection.setRequestMethod("GET");
          urlConnection.connect();

          // Read the input stream into a String
          InputStream inputStream = urlConnection.getInputStream();
          StringBuffer buffer = new StringBuffer();
          if (inputStream == null) {
              // Nothing to do.
              forecastJsonStr = null;
          }
          reader = new BufferedReader(new InputStreamReader(inputStream));

          String line;
          while ((line = reader.readLine()) != null) {
              // Since it's JSON, adding a newline isn't necessary (it won't affect parsing)
              // But it does make debugging a *lot* easier if you print out the completed
              // buffer for debugging.
              buffer.append(line + "\n");
          }

          if (buffer.length() == 0) {
              // Stream was empty.  No point in parsing.
              forecastJsonStr = null;
          }
          forecastJsonStr = buffer.toString();
      } catch (IOException e) {
          // If the code didn't successfully get the weather data, there's no point in attempting
          // to parse it.
          forecastJsonStr = null;
      } finally {
          if (urlConnection != null) {
              urlConnection.disconnect();
          }
          if (reader != null) {
              try {
                  reader.close();
              } catch (final IOException e) {
              }
          }
      }
      return forecastJsonStr;
    }
}
