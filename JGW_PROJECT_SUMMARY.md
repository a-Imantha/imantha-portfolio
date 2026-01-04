# J.G. Wentworth (JGW) - ML Project Summary

## 🏢 About J.G. Wentworth

**J.G. Wentworth** is a **financial services company** that specializes in:
- **Debt resolution/consolidation** services
- **Personal loans**
- **Structured settlement purchasing**
- Consumer financial services

The company helps consumers manage and consolidate debt, primarily through:
- Lead generation (marketing campaigns)
- Lead qualification
- Enrollment in debt resolution programs
- Client retention

---

## 📊 Project Overview

This repository contains **machine learning models and optimization pipelines** built for JGW's sales and marketing operations. The work focuses on **predicting customer behavior** and **optimizing marketing spend**.

### Infrastructure
- **Data Warehouse**: Azure SQL Database (`datascience-dw-sql`)
- **ML Platform**: MLflow for model tracking
- **Data Sources**: 
  - Salesforce CRM data
  - TransUnion credit reports
  - US Census demographic data (DP03 - Economic Characteristics)
  - Marketing channel data
  - Customer interaction logs

---

## 🎯 Machine Learning Models Developed

### 1. **Enrollment Prediction Model (Enroll_V1_2)**
**Purpose**: Predict whether a lead will enroll in a debt resolution program within 14 days

**Target Variable**: 
- `enrolled` = 1 if enrolled within 14 days of lead date
- `enrolled` = 0 otherwise

**Use Case**: 
- Prioritize high-value leads for sales follow-up
- Optimize resource allocation
- Improve conversion rates

**Model Type**: Classification (likely Gradient Boosting based on notebooks)

---

### 2. **Contact/Promise-to-Call Model (Contact_V1 / PTC_V1)**
**Purpose**: Predict propensity of a lead to respond to contact attempts

**Key Features** (Top 10 by importance):
1. **TotalDebt** (20.5%) - Total debt amount
2. **SubChannel** (12.1%) - Marketing sub-channel
3. **UniqueAddressCount** (5.1%) - Residential stability
4. **AvgResidenceStay** (4.7%) - Average residence duration
5. **FICO** (4.2%) - Credit score
6. **AvgCurrentBalance_revolving** (3.5%) - Revolving debt balance
7. **FractionLate90Days** (3.5%) - Late payment history
8. **UniqueStateCount** (2.9%) - Geographic mobility
9. **NCreditors** (2.7%) - Number of creditors
10. **FractionLate60Days** (2.6%) - Recent late payments

**Data Types**:
- **Financial**: Debt amounts, FICO scores, credit balances, payment history
- **Demographic**: Census data (income, employment, household characteristics)
- **Behavioral**: Lead source, marketing channel, contact history
- **Geographic**: State, zipcode, address history

**Use Case**:
- Optimize call center resource allocation
- Target leads with higher contact propensity
- Improve cost per lead (CPL)

**Versions**:
- v4_july: July 2024 model
- v4_august: August 2024 model (updated with new data)

---

### 3. **Cancellation Prediction Model (Cancel_V1)**
**Purpose**: Predict whether an enrolled client will cancel within 90 days

**Target Variable**:
- `cancel_90` = 1 if client cancels within 90 days
- `cancel_90` = 0 if client persists

**Use Case**:
- Identify at-risk clients early
- Proactive retention interventions
- Improve program completion rates
- Calculate customer lifetime value (LTV)

**Business Impact**: Reducing early cancellations saves:
- Acquisition costs
- Onboarding expenses
- Lost revenue from incomplete programs

---

## 📈 Data Processing & Analytics

### Data Exploration (DataExplore/)
**Trend Analysis Performed**:
- Lead generation trends (2022-04 to 2024-06)
- Enrollment conversion rates over time
- Model prediction validation
- Tertile analysis (Low/Medium/High risk groups)
- Pre-qualification analysis

### Feature Engineering
The models use sophisticated feature engineering:

**1. Credit/Financial Features**:
- Total debt, current balances (by type: revolving, installment, mortgage)
- Credit utilization metrics
- Payment history (30/60/90 days late fractions)
- Average scheduled monthly payments
- Past due amounts and collections

**2. Behavioral Features**:
- Lead source and marketing channel
- Email source, sub-channel
- Days between lead and delinquency
- Inquiry count (credit pulls)
- Account durations (average, std dev, range)

**3. Demographic Features** (US Census DP03):
- Income levels (DP03_0061M, DP03_0086M)
- Employment rates (DP03_0035PE)
- Household characteristics
- Poverty levels
- Insurance coverage

**4. Geographic Features**:
- State, Zipcode
- Unique state/address count (mobility indicators)
- Average residence stay

**5. Temporal Features**:
- Lead date (month, season, weekend, holiday)

### Feature Selection
- **MOM Score** (Measure of Match/Overlap) used for feature selection
- Threshold: 0.3 (features below dropped)
- Evaluates predictive power of categorical and numerical features
- Handles missing values appropriately

---

## 🎯 Media Mix Optimization (MediaMixOptimize/)

### Purpose
Optimize marketing budget allocation across 50+ marketing channels/treatments

### Methodology
1. **Polynomial Saturation Models**: Model CPL (Cost Per Lead) and effect size vs. lead volume
2. **Optimization Algorithm**: Maximize ROI while respecting budget constraints
3. **A/B Test Evaluation**: Multiple landing page and creative tests

### Marketing Channels Analyzed
**Major Categories**:
1. **Affiliate Marketing** (30+ partners):
   - Quinstreet (largest: $8.7M budget, 39K leads)
   - LendingTree ($1.6M, 32K leads)
   - Darbian ($962K, 11K leads)
   - Consumer Affairs, ThinkWallet, TWC, Mario, etc.

2. **Paid Search**:
   - Google Ads (Brand, Non-Brand, Bankruptcy, Bad Credit, Debt Resolution, Consolidation)
   - Microsoft Ads (Brand, Non-Brand)
   - Multiple keyword match types (Exact, Broad)

3. **Paid Social**:
   - Meta/Facebook ($1.2M budget)
   - TikTok ($606K budget)

4. **Performance Marketing**:
   - Google Performance Max

### Optimization Results
**Key Metrics**:
- `realizable_effect_size`: Expected enrollment value per lead
- `CPL`: Cost per lead
- `delta_spend`: Recommended budget change
- `optimal_spend`: Target budget allocation

**Optimization Outcomes**:
- **Increase spend (+20%)**: Top performers (e.g., Quinstreet, Microsoft Ads Brand)
- **Maintain spend (0%)**: Stable performers (e.g., Google Ads MaxRoas campaigns)
- **Decrease spend (-20%)**: Underperformers (e.g., LendingTree, Sonic, certain affiliates)

**Business Impact**:
- Improved overall ROI
- Reduced wasted marketing spend
- Better lead quality targeting
- Data-driven budget decisions

---

## 🔧 Technical Implementation

### Tools & Technologies
- **Python**: pandas, numpy, scikit-learn
- **Database**: Azure SQL Server (pyodbc)
- **ML Platform**: MLflow (experiment tracking, model versioning)
- **Modeling**: Gradient Boosting, Polynomial Regression
- **Feature Engineering**: Custom MOM score, categorical encoding
- **Visualization**: matplotlib
- **Statistical Analysis**: OLS regression for media mix modeling

### Data Pipeline
1. **Extract**: SQL queries from Azure Data Warehouse
2. **Transform**: 
   - Handle missing values
   - Feature engineering (MOM scores, encodings)
   - Temporal feature extraction
   - Census data joins
3. **Model Training**: 
   - Train/test splits (temporal or random)
   - Hyperparameter tuning
   - Model validation
4. **Scoring**: 
   - Batch prediction on new leads
   - Model performance monitoring
5. **Deployment**: 
   - Pickle models (`.pkl` files)
   - MLflow tracking
   - Feature importance analysis

### Model Performance Tracking
- Feature importance CSVs
- Evaluation plots
- Multiple model versions (v4_july, v4_august)
- A/B test results

---

## 💼 Business Value & Impact

### For Sales Operations:
1. **Lead Prioritization**: Focus on high-propensity leads
2. **Resource Optimization**: Allocate call center capacity efficiently
3. **Conversion Improvement**: Target right leads at right time

### For Marketing:
1. **Budget Optimization**: Shift spend to high-ROI channels
2. **CPL Reduction**: Identify and scale cost-effective channels
3. **Channel Performance**: Data-driven partner evaluation

### For Retention:
1. **Churn Prevention**: Identify at-risk clients early
2. **Intervention Strategies**: Proactive outreach to prevent cancellations
3. **LTV Improvement**: Increase program completion rates

### For Finance:
1. **Revenue Forecasting**: Predict enrollment pipeline
2. **Cost Management**: Optimize customer acquisition costs
3. **ROI Measurement**: Track marketing effectiveness

---

## 📊 Data Types & Volume

### Customer Data
- **Timeline**: 2022-04-01 to 2024-06-30 (2+ years)
- **Leads**: Tens of thousands (32K+ from single affiliate)
- **Features**: 70-80 features per model
- **Credit Data**: TransUnion credit reports (comprehensive trade lines)

### Demographic Data
- **Source**: US Census Bureau (ACS 5-Year Estimates)
- **Variables**: DP03 Economic Characteristics
  - Income and earnings
  - Employment status
  - Commuting characteristics
  - Occupation
  - Health insurance coverage
  - Poverty status

### Marketing Data
- **Channels**: 50+ unique treatments
- **Spend Data**: Campaign-level budgets
- **Performance**: Leads, CPL, conversion rates
- **Time Granularity**: Monthly averages (3-month rolling)

---

## 🎯 Model Deployment Strategy

### Production Models
1. **Enrollment Model**: Score new leads for prioritization
2. **Contact Model**: Predict contact success probability
3. **Cancellation Model**: Identify at-risk enrollments

### Scoring Frequency
- **Batch scoring**: Daily or weekly for new leads
- **Real-time scoring**: Possible for high-priority use cases

### Model Monitoring
- **Performance tracking**: Conversion rates, accuracy metrics
- **Data drift detection**: Feature distribution changes
- **Model retraining**: Monthly updates (v4_july → v4_august pattern)

---

## 🚀 Key Insights & Recommendations

### Model Insights
1. **Debt Amount** is the strongest predictor of contact propensity
2. **Marketing channel** significantly impacts lead quality
3. **Credit history** (late payments, FICO) crucial for all predictions
4. **Geographic mobility** (address changes) indicates risk
5. **Census demographics** add meaningful predictive power

### Marketing Insights
1. **Top Performers**: Quinstreet, Google Brand Search, Microsoft Brand
2. **Scaling Opportunities**: Increase budget on channels with positive `realizable_effect_size`
3. **Cut Candidates**: Affiliates with negative effect sizes (LendingTree, Sonic, certain TikTok campaigns)
4. **A/B Testing**: Active experimentation on landing pages and creatives

### Business Recommendations
1. **Lead Scoring**: Implement tertile-based prioritization (High/Medium/Low)
2. **Channel Optimization**: Reallocate $500K+ from underperforming to top channels
3. **Retention Focus**: Proactive interventions for predicted churners
4. **Data Quality**: Continue enriching with census and credit data

---

## 📁 Repository Structure

```
jgw-notebooks-develop/
├── Cancel_V1/                      # 90-day cancellation prediction
│   ├── Model_Cancel_V1.ipynb
│   └── model_building_and_scoring/
├── Contact_V1/                     # Contact propensity (PTC) prediction
│   ├── model_building_and_scoring/
│   │   ├── Model_PTC_V1_Score.ipynb
│   │   └── Model_PTC_V1_Score_with_MLFLOW.ipynb
│   └── model_performance/          # Model artifacts & metrics
│       ├── version_v4_august/
│       └── version_v4_july/
├── Enroll_V1_2/                    # Enrollment prediction (14-day window)
│   ├── Model_V1_2.ipynb
│   └── model_building_and_scoring/
├── DataExplore/                    # EDA & trend analysis
│   └── trend-analysis.ipynb
└── MediaMixOptimize/               # Marketing budget optimization
    ├── find-media-mix.ipynb
    ├── optimized_media_mix.csv
    └── OLS_Results_*.csv
```

---

## 🎓 Technical Complexity

### Advanced Techniques Used
1. **Custom Feature Selection**: MOM (Measure of Match) scores
2. **Polynomial Saturation Modeling**: Non-linear marketing response curves
3. **Temporal Features**: Holiday calendars, seasonality
4. **Multi-source Data Integration**: CRM + Credit + Census
5. **Model Versioning**: MLflow experiment tracking
6. **A/B Test Analysis**: Treatment effect estimation

### Challenges Addressed
1. **Class Imbalance**: Enrollment/cancellation rates likely low (handled via stratified sampling)
2. **Missing Data**: Robust handling with custom MOM scores
3. **High Cardinality**: Many marketing channels, zipcodes (grouped/encoded)
4. **Temporal Drift**: Monthly model retraining
5. **Budget Constraints**: Optimization within realistic spending limits

---

## 💡 Summary

This is a **sophisticated, production-grade ML system** for a **financial services company** (J.G. Wentworth) focused on **debt resolution services**. 

**Core Business**: Helping consumers consolidate and resolve debt.

**ML Solutions Built**:
1. ✅ **Enrollment Prediction** - Who will enroll?
2. ✅ **Contact Prediction** - Who will respond to calls?
3. ✅ **Cancellation Prediction** - Who will cancel early?
4. ✅ **Media Mix Optimization** - Where to spend marketing budget?

**Data Processed**:
- **Customer financial data** (debt, credit scores, payment history)
- **Demographic data** (US Census economic indicators)
- **Behavioral data** (marketing interactions, lead sources)
- **Marketing performance** (50+ channels, spend, CPL, conversions)

**Business Impact**:
- Improved lead conversion rates
- Optimized marketing spend (millions of dollars)
- Better customer retention
- Data-driven sales and marketing operations

**Technical Sophistication**: High
- Custom algorithms (MOM scores)
- Multiple model types (classification, regression, optimization)
- Production ML infrastructure (Azure, MLflow)
- Continuous model improvement (versioning)

This work represents **end-to-end ML engineering** for a critical business function, directly impacting revenue and operational efficiency.

