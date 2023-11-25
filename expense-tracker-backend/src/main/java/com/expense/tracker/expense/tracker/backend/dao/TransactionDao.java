package com.expense.tracker.expense.tracker.backend.dao;

import com.expense.tracker.expense.tracker.backend.models.TransactionDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionDao extends JpaRepository<TransactionDetails, Long> {
    List<TransactionDetails> findByUserId(Long id);
}
