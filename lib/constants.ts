import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Rohith Alagiri",
  headline: "AWS Data Engineer",
  summary: "Results-driven Data Engineer with 3 years of experience specializing in building scalable data pipelines, optimizing complex Postgres SQL/PL/SQL queries, and leveraging AWS services for data integration. Proven track record of reducing query latency by 50% and automating data refresh cycles using cloud-native tools.",
  experiences: [
    {
      company: "Tata Consultancy Services (Cigna Healthcare)",
      role: "AWS Data Engineer",
      period: "26/09/2022 - Present",
      location: "Chennai, India",
      description: [
        "Cloud Infrastructure & Python Development: Designed and developed scalable Python-based solutions for data replication and transformation processes across AWS cloud infrastructure.",
        "AWS Service Implementation: Implemented and maintained AWS services including Lambda, S3, DynamoDB, RDS (PostgreSQL/MySQL), Batch, EventBridge, and SQS to support end-to-end data workflows.",
        "Pipeline Orchestration & Automation: Leveraged AWS Step Functions to automate end-to-end data processing workflows and utilized AWS EventBridge for efficient task orchestration and scheduling.",
        "Real-time Data Integration: Integrated Qlik for near real-time data replication and collaborated with cross-functional teams to ensure data availability for dashboards and reporting tools.",
        "Cloud Data Warehousing: Implemented Amazon Redshift solutions, utilizing Redshift Spectrum for lake-house querying and Redshift Materialized Views to accelerate complex analytical queries.",
        "AI-Enhanced Velocity: Utilized GitHub Copilot to accelerate the authoring of Python-based ETL scripts and complex SQL transformations, increasing development velocity.",
        "Agile Collaboration: Maintained code repositories using GitHub for version control and collaborated within Agile/Scrum environments to ensure seamless data delivery."
      ]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Data Engineer - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/bea8876c1b1945009eb2ca44a75ed440"
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "2026",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ba5af7ae2c5e49ef8833cf6d92517e09"
    },
    {
      title: "Academy Accreditation - Databricks Fundamentals",
      issuer: "Databricks",
      date: "2026",
      link: "https://credentials.databricks.com/dafed179-1fe9-4ee5-b6a0-1cc66000ab0a#acc.QHmKCes1"
    },
    {
      title: "GitHub Copilot",
      issuer: "GitHub",
      date: "2024",
      link: "https://learn.microsoft.com/en-us/users/ROHITH-5712/credentials/EE7911BDEC7C6887"
    }
  ],
  skills: [
    {
      category: "Data Engineering",
      items: ["AWS Lake Formation", "Amazon EMR", "PySpark", "AWS Step Functions", "Hive"]
    },
    {
      category: "Cloud & AWS",
      items: ["AWS Lambda", "Amazon S3", "AWS Glue", "Amazon Redshift", "Amazon DynamoDB", "Amazon API Gateway", "AWS Secrets Manager", "Amazon SNS", "Amazon SQS"]
    },
    {
      category: "Database Dev",
      items: ["Postgres PL/SQL", "SQL Integration", "Database Tuning", "Liquibase"]
    },
    {
      category: "Tools & AI",
      items: ["GitHub Copilot", "GitHub Actions", "CI/CD", "CRON Scheduling", "JIRA", "DBeaver", "Postman"]
    }
  ],
  education: [
    {
      school: "University of Madras",
      degree: "Master of Computer Applications",
      period: "06/2023 - 07/2025",
      details: "Chennai, India"
    }
  ],
  contact: {
    email: "rohithalagiri15@gmail.com",
    linkedin: "https://linkedin.com/in/rohithalagiri",
    github: "https://github.com/rohithalagiri",
    location: "Chennai, India",
    phone: "9150790182"
  }
};
