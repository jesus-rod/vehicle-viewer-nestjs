package com.audi.interview.booking.controller;

import com.audi.interview.booking.jpa.domain.User;
import com.audi.interview.booking.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<User> getUsers() {
        log.debug("Getting all users");
        return userService.findAll();
    }

    @GetMapping(value = "/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        Optional<User> optionalUser = userService.findById(id);
        return optionalUser.orElseThrow(
                () -> new NoSuchElementException("No user found with id " + id)
        );
    }
}
