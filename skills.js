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
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "AWS RDS",
      "AWS SageMaker",
      "Azure Data Factory",
      "Azure Data Lake Storage",
      "Azure Databricks",
      "Azure ML",
      "Azure DevOps",
      "Kubernetes",
      "Docker",
      "dbt (Data Build Tool)",
      "CI/CD Pipelines",
      "REST APIs",
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
      "Model Deployment",
      "Model Monitoring",
      "Event-Driven Architecture",
      "Message Queues",
      "Parallel Processing",
      "Business Intelligence Integratiom",
      "Agile/Scrum",
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
