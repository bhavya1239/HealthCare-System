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

    public List<Test> getTests(String centerId) {
        return testRepository.findByDiagnosticCenterCenterId(centerId);
    }

    public Appointment makeAppointment(Appointment appointment) {
//        User user = userRepository.findById(userId).orElseThrow();
//        DiagnosticCenter center = diagnosticCenterRepository.findById(centerId).orElseThrow();
//        Test test = testRepository.findById(testId).orElseThrow();
//
//        Appointment appointment = new Appointment();
//        appointment.setUser(user);
//        appointment.setDiagnosticCenter(center);
//        appointment.setTest(test);
//        //appointment.setDatetime(dateTime);
//        appointment.setApproved(false);

        return appointmentRepository.save(appointment);
    }
}
