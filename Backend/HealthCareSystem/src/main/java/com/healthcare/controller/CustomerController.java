package com.healthcare.controller;

import com.healthcare.dto.Appointment;
import com.healthcare.dto.DiagnosticCenter;
import com.healthcare.dto.Test;
import com.healthcare.dto.User;
import com.healthcare.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/user")
public class CustomerController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @GetMapping("/centers")
    public List<DiagnosticCenter> getDiagnosticCenters() {
        return userService.getDiagnosticCenters();
    }

    @GetMapping("/centers/{centerId}/tests")
    public List<Test> getTests(@PathVariable String centerId) {
        return userService.getTests(centerId);
    }

    @PostMapping("/appointments")
    public Appointment makeAppointment(@RequestParam Long userId, @RequestParam Long centerId, @RequestParam Long testId, @RequestParam LocalDateTime datetime) {
        return userService.makeAppointment(userId, centerId, testId, datetime);
    }
}
