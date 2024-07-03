package com.healthcare.controller;

import com.healthcare.dto.Appointment;
import com.healthcare.dto.DiagnosticCenter;
import com.healthcare.dto.Test;
import com.healthcare.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/addCenter")
    public DiagnosticCenter addCenter(@RequestBody DiagnosticCenter center) {
        return adminService.addCenter(center);
    }

    @GetMapping("/allCenters")
    public List<DiagnosticCenter> getAllCenters(){
        return adminService.getAllCenters();
    }

    @DeleteMapping("/centers/{centerId}")
    public void removeCenter(@PathVariable String centerId) {
        adminService.removeCenter(centerId);
    }

    @PostMapping("/centers/{centerId}/tests")
    public Test addTest(@PathVariable String centerId, @RequestBody Test test) {
        return adminService.addTest(centerId, test);
    }

    @DeleteMapping("/tests/{testId}")
    public void removeTest(@PathVariable Long testId) {
        adminService.removeTest(testId);
    }

    @GetMapping("/centers/{centerId}/appointments")
    public List<Appointment> getAppointments(@PathVariable String centerId) {
        return adminService.getAppointments(centerId);
    }

    @PostMapping("/appointments/{appointmentId}/approve")
    public void approveAppointment(@PathVariable Long appointmentId, @RequestParam boolean approved) {
        adminService.approveAppointment(appointmentId, approved);
    }
}
