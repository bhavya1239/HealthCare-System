package com.healthcare.service;

import com.healthcare.dto.Appointment;
import com.healthcare.dto.DiagnosticCenter;
import com.healthcare.dto.Test;
import com.healthcare.dto.User;
import com.healthcare.repository.AppointmentRepository;
import com.healthcare.repository.DiagnosticCenterRepository;
import com.healthcare.repository.TestRepository;
import com.healthcare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class AdminService {
    @Autowired
    private DiagnosticCenterRepository diagnosticCenterRepository;

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public DiagnosticCenter addCenter(DiagnosticCenter center) {
        return diagnosticCenterRepository.save(center);
    }

    public List<DiagnosticCenter> getAllCenters(){
        return diagnosticCenterRepository.findAll();
    }

    public void removeCenter(int centerId) {
        diagnosticCenterRepository.deleteById(centerId);
    }

//    public Test addTest(Test test) {
//        return testRepository.save(test);
//    }

    public Test addTest(Integer centerId, String testName) {
        DiagnosticCenter diagnosticCenter = diagnosticCenterRepository.findById(centerId).orElseThrow();
        Test test = new Test();
        test.setTestName(testName);
        test.setDiagnosticCenter(diagnosticCenter);
        return testRepository.save(test);
    }

    public User login(String email,String password){
        List<User> users = getAllUsers();
        return users.stream().filter(o -> {
            return (o.getEmail().equals(email))
                    && o.getPassword().equals(password);
        }).findFirst().get();
    }

    public void removeTest(Long testId) {
        testRepository.deleteById(testId);
    }

    public List<Appointment> getAppointments(int centerId) {
        return appointmentRepository.findByDiagnosticCenterCenterId(centerId);
    }

    public void approveAppointment(int appointmentId, boolean approved) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();
        appointment.setApproved(approved);
        appointmentRepository.save(appointment);
    }
    // Add a new method for choosing a center
    public DiagnosticCenter chooseCenter(int centerId) {
        return diagnosticCenterRepository.findById(centerId).orElseThrow();
    }

    // Add a new method for entering test details
    public void enterTestDetails(int centerId, Test test) {
        DiagnosticCenter center = diagnosticCenterRepository.findById(centerId).orElseThrow();
    }

    // Add a new method for submitting test details
//    public void submitTestDetails(int centerId) {
//        // Get the diagnostic center
//        DiagnosticCenter center = diagnosticCenterRepository.findById(centerId).orElseThrow();
//
//        // Get all tests associated with the center
//        //List<Test> tests = testRepository.findByDiagnosticCenterCenterId(centerId);
//
//        // Save each test to the database
//        for (Test test : tests) {
//            testRepository.save(test);
//        }
//    }


    // Get test details
    public List<Test> getAllTests() {
        return testRepository.findAll();
    }


    // Removes a test from a specific diagnostic center by test ID and center ID
//    public void removeTest(int centerId, Long testId) {
//        DiagnosticCenter center = diagnosticCenterRepository.findById(centerId)
//                .orElseThrow(() -> new IllegalArgumentException("Invalid center ID"));
//        Test test = testRepository.findById(testId)
//                .orElseThrow(() -> new IllegalArgumentException("Invalid test ID"));
//        if (test.getDiagnosticCenter().equals(center)) {
//            testRepository.delete(test);
//        } else {
//            throw new IllegalArgumentException("Test does not belong to the given center");
//        }
//    }

}
