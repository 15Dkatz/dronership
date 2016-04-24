package model;

/**
 * Created by alex on 4/23/16.
 * this model is intended for use with a database of known drone types, or for use in creating a
 * custom drone build. The user will be able to see if their specific drone is at risk based
 * on the parameters.
 */
public class Drone {
    private String name;
    private double flightTime;              // minutes
    private double operatingRange;          // meters
    private double weight;                  // grams
    private double maxAltitude;             // meters
    private double maxSpeed;                // meters/s
    private double minTemp;                 // celsius (we can convert to F later)
    private double maxTemp;
    private boolean collisionAvoidance;     // does it contain collision avoidance?
    private boolean isAutonomous;           // capable of autonomous flight?
    private boolean gpsCompatible;          // does the drone have GPS?

    // what else? can we get battery charge and other house keeping information relayed back?


    public Drone() {
        //default constructo
    }

    public Drone(String name,
                 double flightTime,
                 double operatingRange,
                 double weight,
                 double maxAltitude,
                 double maxSpeed,
                 double minTemp,
                 double maxTemp,
                 boolean collisionAvoidance,
                 boolean isAutonomous,
                 boolean gpsCompatible)
    {
        this.name = name;
        this.flightTime = flightTime;
        this.operatingRange = operatingRange;
        this.weight = weight;
        this.maxAltitude = maxAltitude;
        this.maxSpeed = maxSpeed;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.collisionAvoidance = collisionAvoidance;
        this.isAutonomous = isAutonomous;
        this.gpsCompatible = gpsCompatible;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getFlightTime() {
        return flightTime;
    }

    public void setFlightTime(double flightTime) {
        this.flightTime = flightTime;
    }

    public double getOperatingRange() {
        return operatingRange;
    }

    public void setOperatingRange(double operatingRange) {
        this.operatingRange = operatingRange;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getMaxAltitude() {
        return maxAltitude;
    }

    public void setMaxAltitude(double maxAltitude) {
        this.maxAltitude = maxAltitude;
    }

    public double getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(double maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public double getMinTemp() {
        return minTemp;
    }

    public void setMinTemp(double minTemp) {
        this.minTemp = minTemp;
    }

    public double getMaxTemp() {
        return maxTemp;
    }

    public void setMaxTemp(double maxTemp) {
        this.maxTemp = maxTemp;
    }

    public boolean isCollisionAvoidance() {
        return collisionAvoidance;
    }

    public void setCollisionAvoidance(boolean collisionAvoidance) {
        this.collisionAvoidance = collisionAvoidance;
    }

    public boolean isAutonomous() {
        return isAutonomous;
    }

    public void setAutonomous(boolean autonomous) {
        isAutonomous = autonomous;
    }

    public boolean isGpsCompatible() {
        return gpsCompatible;
    }

    public void setGpsCompatible(boolean gpsCompatible) {
        this.gpsCompatible = gpsCompatible;
    }
} // end Drone class
