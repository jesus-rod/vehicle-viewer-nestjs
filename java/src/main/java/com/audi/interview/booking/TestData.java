package com.audi.interview.booking;

import com.audi.interview.booking.jpa.domain.User;
import com.audi.interview.booking.jpa.domain.Vehicle;
import com.audi.interview.booking.service.UserService;
import com.audi.interview.booking.service.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.LocalDate;

@Slf4j
@Component
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
@RequiredArgsConstructor
public class TestData {

    private final UserService userService;

    private final VehicleService vehicleService;

    @PostConstruct
    public void insertTestData() {
        insertTestUsers();
        insertTestVehicles();
    }

    private void insertTestUsers() {
        log.debug("Inserting test users");
        if (!userService.findByEmail("test@user.com").isPresent()) {
            User testUser1 = new User();
            testUser1.setEmail("test@user.com");
            testUser1.setFirstName("Max");
            testUser1.setLastName("Power");
            testUser1.setBirthday(LocalDate.parse("1980-12-12"));

            userService.saveUser(testUser1);
        }

        if (!userService.findByEmail("test2@user.com").isPresent()) {
            User testUser2 = new User();
            testUser2.setEmail("test2@user.com");
            testUser2.setFirstName("James");
            testUser2.setLastName("Bond");
            testUser2.setBirthday(LocalDate.parse("1985-12-12"));

            userService.saveUser(testUser2);
        }
    }

    private void insertTestVehicles() {
        log.debug("Inserting test vehicles");
        if (!vehicleService.findByLicensePlate("IN-1234").isPresent()) {
            Vehicle testVehicle1 = new Vehicle();
            testVehicle1.setLicensePlate("IN-1234");
            testVehicle1.setModel("S4");
            testVehicle1.setColor("red");
            testVehicle1.setActive(true);
            testVehicle1.setVin("8765-4321");
            testVehicle1.setValidTill(LocalDate.now().plusDays(1));

            vehicleService.saveVehicle(testVehicle1);
        }

        if (!vehicleService.findByLicensePlate("IN-5678").isPresent()) {
            Vehicle testVehicle2 = new Vehicle();
            testVehicle2.setLicensePlate("IN-5678");
            testVehicle2.setModel("Q3");
            testVehicle2.setColor("black");
            testVehicle2.setActive(true);
            testVehicle2.setVin("1234-4321");
            testVehicle2.setValidTill(LocalDate.now().plusDays(1));

            vehicleService.saveVehicle(testVehicle2);
        }
    }
}

