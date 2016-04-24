import javafx.application.Application;
import javafx.beans.Observable;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.ListView;

/**
 * Created by alex on 4/24/16.
 * This class will handle sending information to the list view and deteting user input for the drone selection object
 */
public class listViewController {

    public static final ObservableList environmentList = FXCollections.observableArrayList();
    public static final ObservableList data = FXCollections.observableArrayList();


    public listViewController() {
    }

    public static ObservableList getEnvironmentList() {
        environmentList.addAll("Weather: ","Temperature: ","Wind Speed: ","Gust Speed: ","Wind Direction: ","Visibility: ");
        return environmentList;
    }

    public static ObservableList getData() {
        return data;
    }
}
