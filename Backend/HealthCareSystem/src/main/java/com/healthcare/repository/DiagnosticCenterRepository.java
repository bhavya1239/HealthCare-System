package com.healthcare.repository;

import com.healthcare.dto.DiagnosticCenter;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class DiagnosticCenterRepository implements JpaRepository<DiagnosticCenter, Long> {
    @Override
    public void flush() {

    }

    @Override
    public <S extends DiagnosticCenter> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends DiagnosticCenter> List<S> saveAllAndFlush(Iterable<S> entities) {
        return List.of();
    }

    @Override
    public void deleteAllInBatch(Iterable<DiagnosticCenter> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public DiagnosticCenter getOne(Long aLong) {
        return null;
    }

    @Override
    public DiagnosticCenter getById(Long aLong) {
        return null;
    }

    @Override
    public DiagnosticCenter getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends DiagnosticCenter> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends DiagnosticCenter> List<S> findAll(Example<S> example) {
        return List.of();
    }

    @Override
    public <S extends DiagnosticCenter> List<S> findAll(Example<S> example, Sort sort) {
        return List.of();
    }

    @Override
    public <S extends DiagnosticCenter> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends DiagnosticCenter> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends DiagnosticCenter> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends DiagnosticCenter, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends DiagnosticCenter> S save(S entity) {
        return null;
    }

    @Override
    public <S extends DiagnosticCenter> List<S> saveAll(Iterable<S> entities) {
        return List.of();
    }

    @Override
    public Optional<DiagnosticCenter> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public List<DiagnosticCenter> findAll() {
        return List.of();
    }

    @Override
    public List<DiagnosticCenter> findAllById(Iterable<Long> longs) {
        return List.of();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(DiagnosticCenter entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends DiagnosticCenter> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<DiagnosticCenter> findAll(Sort sort) {
        return List.of();
    }

    @Override
    public Page<DiagnosticCenter> findAll(Pageable pageable) {
        return null;
    }
}
