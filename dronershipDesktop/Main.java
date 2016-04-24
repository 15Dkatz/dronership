import javafx.event.ActionEvent;
import model.Drone;
//37°45'22.9"N 122°26'34.3"W
import model.LocalEnvironment;
import org.json.JSONException;


/**
 * Created by alex on 4/23/16.
 */
public class Main {
    WeatherJsonParse wjp;
    LocalEnvironment environment = new LocalEnvironment();
    Drone drone = new Drone();

    public static void main(String[] args) {
    }


    //TODO: set up methods to handle user input of drone type


    // Functions

    public boolean safeToFly() throws JSONException {
        // examines environmental data and determines if it is safe for the drone
        // to operate
        setEnvironmentalStatus();
        boolean safe;

        //TODO:aeg add in methods to handle weather
        if (environment.getTemperature() > 100 ||
                environment.getWindSpeed() > 15 ||
                environment.getVisibility() < 5 ||
                environment.getTemperature() < 10 ||
                environment.getGustSpeed() > 10) {
            safe = false;
        } else {
            safe = true;
        }
        return safe;
    }

    public boolean inRestrictedAirspace() {
        // is the device currently in restricted airspace?

        return false;
    }

    // What determines flight risk?


    public void setEnvironmentalStatus() throws JSONException {
        wjp = new WeatherJsonParse(WebPull.HttpCallWeather(37.4522,-122.2634));

        environment.setGustSpeed(wjp.getGustMPH());
        environment.setTemperature(wjp.getTemperature());
        environment.setVisibility(wjp.getVisibility());
        environment.setWeather(wjp.getWeather());
        environment.setWindDirection(wjp.getWindDegrees());
        environment.setWindSpeed(wjp.getWindSpdMPH());
    }

    public void handleSetDrone(ActionEvent actionEvent) {
        // handle user setting drone params here
    }





}
