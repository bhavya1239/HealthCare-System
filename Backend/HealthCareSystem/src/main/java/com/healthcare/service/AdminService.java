package com.healthcare.service;

import com.healthcare.dto.Appointment;
import com.healthcare.dto.DiagnosticCenter;
import com.healthcare.dto.Test;
import com.healthcare.repository.AppointmentRepository;
import com.healthcare.repository.DiagnosticCenterRepository;
import com.healthcare.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private DiagnosticCenterRepository diagnosticCenterRepository;

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    public DiagnosticCenter addCenter(DiagnosticCenter center) {
        return diagnosticCenterRepository.save(center);
    }

    public List<DiagnosticCenter> getAllCenters(){
        return diagnosticCenterRepository.findAll();
    }

    public void removeCenter(String centerId) {
        diagnosticCenterRepository.deleteById(centerId);
    }

    public Test addTest(String centerId, Test test) {
        DiagnosticCenter center = diagnosticCenterRepository.findById(centerId).orElseThrow();
        test.setDiagnosticCenter(center);
        return testRepository.save(test);
    }

    public void removeTest(Long testId) {
        testRepository.deleteById(testId);
    }

    public List<Appointment> getAppointments(String centerId) {
        return appointmentRepository.findByDiagnosticCenterCenterId(centerId);
    }

    public void approveAppointment(Long appointmentId, boolean approved) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow();
        appointment.setApproved(approved);
        appointmentRepository.save(appointment);
    }
    public static void main(String[] args) {
        System.out.println("Admin Service");
    }
}
