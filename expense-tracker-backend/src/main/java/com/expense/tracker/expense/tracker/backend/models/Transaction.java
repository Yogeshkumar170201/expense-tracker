package com.expense.tracker.expense.tracker.backend.models;

import com.expense.tracker.expense.tracker.backend.utils.TransactionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long id;
    @Enumerated(EnumType.STRING)
    private TransactionType type;
    private String title;
    private Long amount;
    private String dateOfTransaction;
    private String source;
    private String reference;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(
            name = "user_id"
    )
    private User user;

}
