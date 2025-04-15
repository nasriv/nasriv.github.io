document.addEventListener("DOMContentLoaded", () => {
  // Embedded JSON data
  const skillsData = {
    skills: [
      "Python",
      "SQL",
      "PySpark",
      "Pandas",
      "Data Modeling",
      "ETL Pipelines",
      "Batch Processing",
      "Apache Airflow",
      "Apache Spark",
      "AWS S3",
      "AWS Glue",
      "AWS Lambda",
      "AWS Redshift",
      "AWS RDS",
      "AWS SageMaker",
      "AWS CloudFormation",
      "Azure Data Factory",
      "Azure Data Lake Storage",
      "Azure Databricks",
      "Azure ML",
      "Azure Key Vault",
      "Azure DevOps",
      "Kubernetes",
      "Docker",
      "Terraform",
      "dbt (Data Build Tool)",
      "CI/CD Pipelines",
      "REST APIs",
      "JSON/Parquet/Avro",
      "Data Lakehouse Architecture",
      "Data Warehousing",
      "Data Lakes",
      "Version Control (Git)",
      "Unit Testing",
      "Integration Testing",
      "Monitoring & Alerting",
      "Data Quality Validation",
      "Data Governance",
      "HIPAA Compliance",
      "PHI/PII Handling",
      "De-identification Techniques",
      "Role-Based Access Control (RBAC)",
      "OAuth2",
      "Linux/Unix Scripting",
      "Bash",
      "Cron Jobs",
      "Object-Oriented Programming (OOP)",
      "Modular Code Design",
      "Cost Optimization (Cloud)",
      "Feature Stores",
      "Model Deployment",
      "Model Monitoring",
      "Jupyter Notebooks",
      "Event-Driven Architecture",
      "Message Queues",
      "Parallel Processing",
      "Cloud Cost Monitoring",
      "Business Intelligence Integratiom",
      "Agile/Scrum"
    ],
  };

  const skillsGrid = document.querySelector(".skills-grid");

  // Loop through the skills and create bubbles
  skillsData.skills.forEach((skill) => {
    const skillBubble = document.createElement("div");
    skillBubble.classList.add("skill-bubble");
    skillBubble.textContent = skill;

    // Append the bubble to the skills grid
    skillsGrid.appendChild(skillBubble);
  });
});
