package com.healthcare.service;

import com.healthcare.dto.DiagnosticCenter;
import com.healthcare.dto.Test;
import com.healthcare.dto.User;
import com.healthcare.repository.AppointmentRepository;
import com.healthcare.repository.DiagnosticCenterRepository;
import com.healthcare.repository.TestRepository;
import com.healthcare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.healthcare.dto.Appointment;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DiagnosticCenterRepository diagnosticCenterRepository;

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;


    public List<DiagnosticCenter> getDiagnosticCenters() {
        return diagnosticCenterRepository.findAll();
    }

//    public List<Test> getTests(int centerId) {
//        return testRepository.findByDiagnosticCenterCenterId(centerId);
//    }

    public Appointment makeAppointment(Appointment appointment) {
        // User user = userRepository.findById(appointment.get).orElseThrow();
        // DiagnosticCenter center = diagnosticCenterRepository.findById(appointment.getTest().
        //  getDiagnosticCenter().getCenterId()).orElseThrow();
        Test test = testRepository.findById(appointment.getTest().getTestId()).orElseThrow();

        Appointment appointment1 = new Appointment();
        // appointment1.setUser(user);
        // appointment1.setDiagnosticCenter(center);
        appointment1.setTest(test);
        appointment1.setDatetime(appointment.getDatetime());
        appointment1.setApproved(false);

        return appointmentRepository.save(appointment1);
    }
}
