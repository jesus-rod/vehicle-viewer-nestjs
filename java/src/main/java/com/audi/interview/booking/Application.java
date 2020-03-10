package com.audi.interview.booking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Main Application class
 */
@SpringBootApplication
@EnableJpaRepositories
@EntityScan("com.audi.interview.booking.jpa.domain")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
