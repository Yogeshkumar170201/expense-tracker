package com.expense.tracker.expense.tracker.backend.transactions;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class IncomeRequest {
    private String title;
    private Long amount;
    private String dateOfIncome;
    private String source;
    private String reference;
}
