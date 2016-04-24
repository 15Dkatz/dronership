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
}
