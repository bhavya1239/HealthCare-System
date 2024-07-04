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


    @GetMapping("/centers")
    public List<DiagnosticCenter> getDiagnosticCenters() {
        return userService.getDiagnosticCenters();
    }

    @GetMapping("/centers/{centerId}/tests")
    public List<Test> getTests(@PathVariable String centerId) {
        return userService.getTests(centerId);
    }

    @PostMapping("/addAppointment")
    public Appointment makeAppointment(@RequestBody Appointment appointment) {
        return userService.makeAppointment(appointment);
    }
}
