package com.audi.interview.booking.controller;

import com.audi.interview.booking.jpa.domain.Vehicle;
import com.audi.interview.booking.service.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/vehicles")
@RequiredArgsConstructor
public class VehicleController {

    private final VehicleService vehicleService;

    @GetMapping
    public List<Vehicle> getVehicles() {
        log.debug("Getting all vehicles");
        return vehicleService.findAll();
    }
}
