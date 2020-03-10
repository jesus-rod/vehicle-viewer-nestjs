package com.audi.interview.booking.service;

import com.audi.interview.booking.jpa.domain.Vehicle;
import com.audi.interview.booking.jpa.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public Vehicle saveVehicle(Vehicle vehicle) {
        Assert.notNull(vehicle, "Vehicle must not be null");
        return vehicleRepository.saveAndFlush(vehicle);
    }

    public List<Vehicle> findAll() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> findById(Long id) {
        Assert.notNull(id, "Id must not be null");
        return vehicleRepository.findById(id);
    }

    public Optional<Vehicle> findByLicensePlate(String licensePlate) {
        Assert.hasLength(licensePlate, "License plate must not be empty");
        return vehicleRepository.findByLicensePlate(licensePlate);
    }
}
