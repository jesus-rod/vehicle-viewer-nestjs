package com.audi.interview.booking.jpa.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDate;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class Vehicle extends AbstractPersistable {

    @Column(unique = true)
    private String licensePlate;

    private String vin;

    private String model;

    private Boolean active;

    private String color;

    private LocalDate validTill;

}
