package model;

/**
 * Created by alex on 4/23/16.
 * This class will maintain all the environmental information relevant to the user's location
 *
 */
public class LocalEnvironment {
    private String weather;
    private Double temperature;
    private Double windSpeed;
    private Double gustSpeed;
    private Double windDirection;
    private Double visibility;


    public LocalEnvironment() {
    }

    public LocalEnvironment(String weather, Double temperature, Double windSpeed, Double gustSpeed, Double windDirection, Double visibility) {
        this.weather = weather;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.gustSpeed = gustSpeed;
        this.windDirection = windDirection;
        this.visibility = visibility;
    }

    public boolean isGoodWeather() {
        //if (this.weather ) {}

    return true;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Double getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(Double windSpeed) {
        this.windSpeed = windSpeed;
    }

    public Double getGustSpeed() {
        return gustSpeed;
    }

    public void setGustSpeed(Double gustSpeed) {
        this.gustSpeed = gustSpeed;
    }

    public Double getWindDirection() {
        return windDirection;
    }

    public void setWindDirection(Double windDirection) {
        this.windDirection = windDirection;
    }

    public Double getVisibility() {
        return visibility;
    }

    public void setVisibility(Double visibility) {
        this.visibility = visibility;
    }
}
