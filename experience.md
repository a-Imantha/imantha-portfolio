# 1) CML Insight App

Company: CML Insight
Techstack: GCP, Kubernetes, Python, Golang, Postgresql, Sklearn, Kustomize
Company URL: https://cmlinsight.com/

Description:
Moving a step ahead from just model predictios CML Insight platform is built to understand the reasoning behind an event to help industries figureout the core decisions and take actions. We used a improved version of propensity score matching to causally reasonfactors affecting an observation. THe application was more focused on Higher education insights. But it was built flexible to other industries and FINTECH related customer data was also analysed using the platform

Contibutions:

Planned and designed end-to-end architectures from data pipelines to backend to cloud deployements including database schemas, microservices, and scalable cloud solutions.

Managed cloud infrastructure using Terraform and Kustomize, building CI/CD pipelines and deploying microservices on Kubernetes clusters.

Designed and implemented machine learning pipelines using frameworks python Sklearn and pipelines using Dagster, and Kubeflow,
integrating automated workflows for multiple projects

Processed and analyzed large datasets to derive actionable insights and formulated algorithms tailored to address diverse business needs.

Led the team by creating design documents, allocating tasks, providing guidance, and maintaining proper documentation to ensure project success.

# 2) Fair Appraisal Now App

Company: CML Insight
Techstack: GCP, Kubernetes, Python, Golang, Postgresql, Sklearn, Kustomize
Company URL: https://fairappraisalnow.com/
Description:

Fairappraisal Now is built as a B2C appliation to do the property tax appraisal process in US easy for a User. This application process county data on properties and using similarity matchig on the features of the property, spot similar properties to the user's property with lower valuations, ultmately making the user save 1000s of dollars on tax for properties by creating a report the user can submit to the relavant county. We used classic machine learning models to find these nearest neighbors and do the analysis. Similarity was calculated using one hot encoded categorical variables with hamming distance and weighted eucledian distance for numerical variables.

Contibutions:

Planned and designed end-to-end architectures from data pipelines to backend to cloud deployements including database schemas, microservices, and scalable cloud solutions.

Managed cloud infrastructure using Terraform and Kustomize, building CI/CD pipelines and deploying microservices on Kubernetes clusters.

Designed and implemented machine learning pipelines using frameworks python Sklearn and pipelines using Dagster, and Kubeflow,
integrating automated workflows for multiple projects

Processed and analyzed large datasets to derive actionable insights and formulated algorithms tailored to address diverse business needs.

Led the team by creating design documents, allocating tasks, providing guidance, and maintaining proper documentation to ensure project success.


# 3) J.G. Wentworth ML Platform (Outsourced Project)

Company: CML Insight (Client: J.G. Wentworth)
Techstack: Azure SQL, Python, Sklearn, MLflow, Pandas, NumPy
Client URL: https://www.jgwentworth.com/
Client Industry: Financial Services - Debt Resolution

Description:

Developed a comprehensive machine learning platform for J.G. Wentworth, a financial services company specializing in debt resolution and consolidation. Built gradient boosting classification models for enrollment, contact propensity, and churn prediction, alongside polynomial regression models for media mix optimization. Implemented custom MOM (Measure of Match) scoring algorithm for feature selection, evaluating overlap distributions between positive and negative classes using histogram-based probability density functions for both categorical and numerical features. Developed polynomial saturation functions to model non-linear marketing response curves, combined with constrained optimization algorithms to maximize ROI across 50+ marketing channels. The system processes customer financial data (debt, credit scores, payment history), demographic data (US Census economic indicators), behavioral data (marketing interactions), and campaign performance metrics to drive data-driven business decisions across their multi-million dollar customer acquisition pipeline.

Contributions:

Designed and developed three production gradient boosting classification models using scikit-learn: enrollment prediction (14-day conversion window), contact propensity scoring (lead prioritization), and cancellation prediction (90-day churn risk). Implemented stratified train-test splits, hyperparameter tuning, and feature importance analysis to identify key predictive factors (total debt, FICO score, late payment fractions, marketing channel). Applied tertile-based risk segmentation (Low/Medium/High) for operational deployment, enabling sales teams to optimize resource allocation and improve conversion rates with quantified lift in key business metrics.

Built a media mix optimization system using polynomial saturation modeling (degree-2 polynomials fitted via scikit-learn pipelines) to capture diminishing returns in CPL (Cost Per Lead) and realizable effect size as lead volume scales. Applied constrained optimization algorithms to maximize total ROI across 50+ marketing channels (paid search, affiliates, social media) while respecting budget constraints and channel-specific saturation curves. The system managed multi-million dollar budgets and delivered data-driven recommendations that reallocated $500K+ from underperforming to high-ROI channels, validated through A/B testing and OLS regression analysis.

Implemented custom feature engineering techniques including MOM (Measure of Match) scores for feature selection using histogram-based overlap calculations with configurable binning strategies for numerical features and frequency-based overlap metrics for categorical features. Integrated multiple data sources (TransUnion credit reports, US Census DP03 economic data, Salesforce CRM) with proper handling of missing values and high-cardinality categorical variables, creating 70-80 predictive features per model including debt-to-income ratios, late payment fractions, geographic mobility indicators, and temporal features.

Established MLflow-based model versioning and tracking system, enabling monthly model retraining cycles and A/B testing of model versions to maintain prediction accuracy as market conditions changed.

Processed and analyzed large-scale datasets (2+ years of lead data, 32K+ monthly leads) to derive actionable insights, achieving measurable improvements in lead conversion rates, customer acquisition costs, and customer lifetime value.
