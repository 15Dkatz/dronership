import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.stage.Stage;
import model.Drone;

import model.LocalEnvironment;
import org.json.JSONException;


/**
 * Created by alex on 4/23/16.
 * 37°45'22.9"N 122°26'34.3"W
 */
public class Main extends Application {
    @FXML
    public ListView listView;
    @FXML
    public Button conditionButton;
    @FXML
    public MenuButton droneSelectButton;
    @FXML
    public Label locationLabel;
    @FXML
    public MenuItem djiMenuItem;
    @FXML
    public MenuItem flyproMenuItem;
    @FXML
    public MenuItem aeeMenuItem;
    @FXML
    public MenuItem autelMenuItem;
    @FXML
    public MenuItem proDroneMenuItem;
    @FXML
    public MenuItem customDroneMenuItem;

    WeatherJsonParse wjp;
    LocalEnvironment environment = new LocalEnvironment();
    Drone drone = new Drone();

    @Override
    public void start(Stage primaryStage) throws Exception {
        Parent root = FXMLLoader.load(getClass().getResource("/fxml/dronership.fxml"));
        primaryStage.setTitle("Drone Hazard Avoidance Application");
        primaryStage.setScene(new Scene(root));
        primaryStage.show();


        //TODO:aeg the listview needs to populate, but the sample code doesn't work.
        listView = new ListView(listViewController.environmentList);



    }


    public static void main(String[] args) {
        launch(args);
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
        //setDrone();
    }


    public void setDrone(Drone drone) {
        this.drone = drone;
    }


}
