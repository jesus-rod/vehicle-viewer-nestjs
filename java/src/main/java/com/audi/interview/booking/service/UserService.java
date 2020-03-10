package com.audi.interview.booking.service;

import com.audi.interview.booking.jpa.domain.User;
import com.audi.interview.booking.jpa.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User saveUser(User user) {
        Assert.notNull(user, "User must not be null");
        return userRepository.saveAndFlush(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id) {
        Assert.notNull(id, "Id must not be null");
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        Assert.hasLength(email, "Email must not be empty");
        return userRepository.findByEmail(email);
    }

}