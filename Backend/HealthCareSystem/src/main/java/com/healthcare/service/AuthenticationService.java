package com.healthcare.service;

import com.healthcare.enumeration.Role;
import com.healthcare.jwt.Service.JwtService;
import com.healthcare.dto.User;
import com.healthcare.model.request.AuthenticationRequest;
import com.healthcare.model.request.RegisterRequest;
import com.healthcare.model.response.AuthenticationResponse;
import com.healthcare.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName((request.getLastName()));
        user.setEmail(request.getEmail());

        user.setPassword((passwordEncoder.encode(request.getPassword())));

        user.setRole(Role.USER);

        repository.save(user);

        var jwtToken = jwtService.generateToken((UserDetails) user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
        ));

        var user = repository.findByEmail(request.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken((UserDetails) user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}