import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from './SEO';
import AlignmentQualityIndex from './research/AlignmentQualityIndex';
import SystemsEngineeringLLM from './research/SystemsEngineeringLLM';
import KANAutoencoders from './research/KANAutoencoders';
import BitcoinRiskFactors from './research/BitcoinRiskFactors';
import TransformerEthereum from './research/TransformerEthereum';
import BrainVoxGen from './research/BrainVoxGen';

const papers = {
  'alignment-quality-index': {
    id: 'alignment-quality-index',
    title: 'Alignment Quality Index (AQI): Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations',
    authors: 'Abhilekh Borah, Chhavi Sharma, Danush Khanna, Utkarsh Bhatt, Gurpreet Singh, Hasnat Md Abdullah, Raghav Kaushik Ravi, Vinija Jain, Jyoti Patel, Shubham Singh, Vasu Sharma, Arpita Vats, Rahul Raja, Aman Chadha, Amitava Das',
    institution: 'AI Institute, University of South Carolina, USA',
    year: '2025',
    venue: 'EMNLP 2025',
    image: '/research/aqi.png',
    keywords: 'AI Alignment, Large Language Models, Machine Learning, Deep Learning, Neural Networks, Model Evaluation, AI Safety, Computational Linguistics',
    abstract: 'Alignment is no longer a luxury; it is a necessity. As large language models (LLMs) enter high-stakes domains like education, healthcare, governance, and law, their behavior must reliably reflect human-aligned values and safety constraints. Yet current evaluations rely heavily on behavioral proxies such as refusal rates, G-Eval scores, and toxicity classifiers, all of which have critical blind spots. Aligned models are often vulnerable to jailbreaking, stochasticity of generation and alignment faking. To address this issue, we introduce the Alignment Quality Index (AQI). This novel geometric and prompt-invariant metric empirically assesses LLM alignment by analyzing the separation of safe and unsafe activations in latent space. By combining measures such as the Davies-Bouldin score (DBS), Dunn index (DI), Xie-Beni index (XBI), and Calinski-Harabasz index (CHI) across various formulations, AQI captures clustering quality to detect hidden misalignments and jailbreak risks, even when outputs appear compliant. AQI also serves as an early warning signal for alignment faking, offering a robust, decoding-invariant tool for behavior-agnostic safety auditing. Additionally, we propose the LITMUS dataset to facilitate robust evaluation under these challenging conditions. Empirical tests on LITMUS across different models trained under DPO, GRPO, and RLHF conditions demonstrate AQI\'s correlation with external judges and ability to reveal vulnerabilities missed by refusal metrics. We make our implementation publicly available to foster future research in this area.',
    arxivId: '2506.13901',
    website: 'https://aqi-web.netlify.app/',
    citations: null
  },
  'systems-engineering-llm': {
    id: 'systems-engineering-llm',
    title: 'Systems Engineering of Large Language Models for Enterprise Applications',
    authors: 'Shubham Singh',
    institution: 'New York University',
    year: '2025',
    venue: 'Preprints.org (Not Peer-Reviewed)',
    postedDate: '9 January 2025',
    doi: '10.20944/preprints202501.0715.v1',
    image: '/research/syseng.png',
    keywords: 'large language models; fine tuning; system engineering',
    abstract: 'This report provides a comprehensive systems engineering analysis of Large Language Model (LLM) adoption in enterprise environments, emphasizing the need for a structured implementation approach to ensure success. It examines key aspects of LLM deployment, including customization techniques such as Parameter-Efficient Fine-Tuning (PEFT), Low-Rank Adaptation (LoRA), and Retrieval-Augmented Generation (RAG), while addressing challenges related to computational resource management, model safety, and ethical considerations. The study outlines a framework covering the entire LLM lifecycle, from initial needs assessment to deployment and maintenance, with a focus on data management strategies, infrastructure requirements, and integration methods. Additionally, it offers a comparative analysis of fine-tuning existing models versus developing in-house solutions, providing practical guidance for overcoming implementation challenges. The findings underscore the importance of balancing technical capabilities with operational constraints and ensuring robust security, compliance, and ethical standards.',
    arxivId: null,
    citations: null
  },
  'kan-autoencoders': {
    id: 'kan-autoencoders',
    title: 'KAN based Autoencoders for Factor Models',
    authors: 'Tianqi Wang, Shubham Singh',
    institution: 'New York University',
    authorDetails: {
      'Tianqi Wang': {
        affiliation: 'Courant Institute of Mathematical Science, New York University, New York, NY, US',
        email: 'tw2250@nyu.edu'
      },
      'Shubham Singh': {
        affiliation: 'ECE Department, NYU Tandon School of Engineering, New York University, New York, NY, US'
      }
    },
    year: '2024',
    venue: 'ACM International Conference for AI in Finance (ICAIF \'24)',
    conference: 'International Conference for AI in Finance \'24, June, 2024, New York, NY USA',
    image: '/research/kanfac.png',
    keywords: 'Deep learning, Autoencoder, Kolmogorov-Arnold Networks (KANs), Asset pricing models, Non-linear factor models, Predictive modeling, Quantitative finance',
    abstract: 'Inspired by recent advances in Kolmogorov-Arnold Networks (KANs), we introduce a novel approach to latent factor conditional asset pricing models. While previous machine learning applications in asset pricing have predominantly used Multilayer Perceptrons with ReLU activation functions to model latent factor exposures, our method introduces a KAN-based autoencoder which surpasses MLP models in both accuracy and interpretability. Our model offers enhanced flexibility in approximating exposures as nonlinear functions of asset characteristics, while simultaneously providing users with an intuitive framework for interpreting latent factors. Empirical backtesting demonstrates our model\'s superior ability to explain cross-sectional risk exposures. Moreover, long-short portfolios constructed using our model\'s predictions achieve higher Sharpe ratios, highlighting its practical value in investment management.',
    arxivId: '2408.02694',
    arxivUrl: 'https://arxiv.org/pdf/2408.02694',
    citations: 2
  },
  'bitcoin-risk-factors': {
    id: 'bitcoin-risk-factors',
    title: 'An empirical study of market risk factors for Bitcoin',
    authors: 'Shubham Singh',
    institution: 'New York University',
    year: '2024',
    venue: 'arXiv preprint arXiv:2406.19401',
    image: '/research/factorsbtc.png',
    keywords: 'cryptocurrency, market risk, quantitative research, financial modeling, Bitcoin, Fama-French model, factor analysis',
    abstract: 'The study examines whether fama-french equity factors can effectively explain the idiosyncratic risk and return characteristics of Bitcoin. By incorporating Fama-french factors, the explanatory power of these factors on Bitcoin\'s excess returns over various moving average periods is tested through applications of several statistical methods. The analysis aims to determine if equity market factors are significant in explaining and modeling systemic risk in Bitcoin.',
    arxivId: '2406.19401',
    arxivUrl: 'https://arxiv.org/pdf/2406.19401',
    citations: null
  },
  'transformer-ethereum': {
    id: 'transformer-ethereum',
    title: 'Transformer-based approach for Ethereum Price Prediction Using Crosscurrency correlation and Sentiment Analysis',
    authors: 'Shubham Singh, Mayur Bhat',
    institution: 'New York University, New York',
    year: '2024',
    venue: 'arXiv preprint arXiv:2401.08077',
    image: '/research/transformereth.png',
    keywords: 'Cryptocurrency, Deep learning, Price forecasting, Sentiment analysis, Transformer',
    abstract: 'The research delves into the capabilities of a transformer-based neural network for Ethereum cryptocurrency price forecasting. The experiment runs around the hypothesis that cryptocurrency prices are strongly correlated with other cryptocurrencies and the sentiments around the cryptocurrency. The model employs a transformer architecture for several setups from single-feature scenarios to complex configurations incorporating volume, sentiment, and correlated cryptocurrency prices. Despite a smaller dataset and less complex architecture, the transformer model surpasses ANN and MLP counterparts on some parameters. The conclusion presents a hypothesis on the illusion of causality in cryptocurrency price movements driven by sentiments.',
    arxivId: '2401.08077',
    citations: 8
  },
  'brainvoxgen': {
    id: 'brainvoxgen',
    title: 'BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI',
    authors: 'S Singh, M Bewoor, A Ranapurwala, S Rai, S Patil',
    year: '2023',
    venue: 'arXiv preprint arXiv:2310.08608',
    image: '/research/brainvoxgen.png',
    keywords: 'Medical Imaging, Ultrasound, MRI, Deep Learning, Image Synthesis, Computer Vision, Healthcare AI, Biomedical Engineering, GAN, Pix2Pix, Neuroimaging',
    abstract: 'BrainVoxGen proposes a deep-learning framework for synthesizing three-dimensional (3D) brain MRI volumes from corresponding 3D ultrasound (US) images using a modified Pix2Pix Generative Adversarial Network (GAN) architecture. The motivation behind this work is to bridge the significant modality gap between ultrasound and MRI in neuroimaging, enabling the extraction of richer anatomical and diagnostic information from ultrasound data while avoiding the cost, accessibility constraints, and contraindications associated with MRI.',
    arxivId: '2310.08608',
    arxivUrl: 'https://arxiv.org/abs/2310.08608',
    doi: '10.48550/arXiv.2310.08608',
    citations: 3
  },
  'climate-resilient-agriculture': {
    id: 'climate-resilient-agriculture',
    title: 'Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana',
    authors: 'S Singh',
    year: '2023',
    venue: 'International Journal of Engineering Applied Sciences and Technology 7(10)',
    image: '/research/geo.png',
    keywords: 'Climate Resilience, Agriculture, India, Telangana, Soil Moisture, Temperature Analysis, Precipitation, Environmental Science, Data Analysis',
    abstract: 'This study uses positive deviance analysis to identify climate-resilient agricultural practices in Telangana, India, by analyzing soil moisture, temperature, and precipitation anomalies.',
    arxivId: null,
    citations: null
  }
};

const PaperDetail = () => {
  const { paperId } = useParams();
  const paper = papers[paperId];

  if (!paper) {
    return (
      <div className="container paper-detail-page">
        <Link to="/research" className="back-link">← Back to Research</Link>
        <div className="page-card">
          <h1>Paper Not Found</h1>
          <p>The requested research paper could not be found.</p>
        </div>
      </div>
    );
  }

  const baseUrl = "https://shubhamcodez.github.io";
  const paperUrl = `${baseUrl}/research/${paper.id}`;
  const paperImage = `${baseUrl}${paper.image}`;

  // Generate SEO metadata
  const seoTitle = `${paper.title} | Shubham Singh NYU`;
  const seoDescription = paper.abstract.length > 160 
    ? paper.abstract.substring(0, 157) + '...' 
    : paper.abstract;
  const seoKeywords = `${paper.keywords}, Shubham Singh, Shubham Singh NYU, ${paper.venue}, research paper`;

  // Generate ScholarlyArticle structured data
  const scholarlyArticleData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": paper.title,
    "name": paper.title,
    "author": paper.authors.split(',').map(author => ({
      "@type": "Person",
      "name": author.trim()
    })),
    "datePublished": paper.year,
    "publisher": {
      "@type": "Organization",
      "name": paper.venue.includes('arXiv') ? "arXiv" : paper.venue.split(' ')[0],
      "url": paper.arxivId ? `https://arxiv.org/abs/${paper.arxivId}` : baseUrl
    },
    "description": paper.abstract,
    "abstract": paper.abstract,
    "keywords": paper.keywords,
    "image": paperImage,
    "url": paperUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": paperUrl
    }
  };

  if (paper.arxivId) {
    scholarlyArticleData["identifier"] = `arXiv:${paper.arxivId}`;
    const arxivUrl = paper.arxivUrl || `https://arxiv.org/abs/${paper.arxivId}`;
    scholarlyArticleData["sameAs"] = arxivUrl;
  }

  if (paper.doi) {
    if (!scholarlyArticleData["identifier"]) {
      scholarlyArticleData["identifier"] = [];
    }
    if (Array.isArray(scholarlyArticleData["identifier"])) {
      scholarlyArticleData["identifier"].push({
        "@type": "PropertyValue",
        "propertyID": "DOI",
        "value": paper.doi
      });
    } else {
      scholarlyArticleData["identifier"] = [
        scholarlyArticleData["identifier"],
        {
          "@type": "PropertyValue",
          "propertyID": "DOI",
          "value": paper.doi
        }
      ];
    }
    if (!scholarlyArticleData["sameAs"]) {
      scholarlyArticleData["sameAs"] = [];
    }
    if (Array.isArray(scholarlyArticleData["sameAs"])) {
      scholarlyArticleData["sameAs"].push(`https://doi.org/${paper.doi}`);
    } else {
      scholarlyArticleData["sameAs"] = [scholarlyArticleData["sameAs"], `https://doi.org/${paper.doi}`];
    }
  }

  if (paper.website) {
    if (!scholarlyArticleData["sameAs"]) {
      scholarlyArticleData["sameAs"] = [];
    }
    if (Array.isArray(scholarlyArticleData["sameAs"])) {
      scholarlyArticleData["sameAs"].push(paper.website);
    } else {
      scholarlyArticleData["sameAs"] = [scholarlyArticleData["sameAs"], paper.website];
    }
  }

  if (paper.institution) {
    scholarlyArticleData["publisher"]["address"] = {
      "@type": "PostalAddress",
      "addressCountry": paper.institution.includes('USA') ? "US" : "IN"
    };
  }

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={paperImage}
        type="article"
        canonicalUrl={paperUrl}
        structuredData={scholarlyArticleData}
      />
      <div className="container paper-detail-page">
        <Link to="/research" className="back-link">
          ← Back to Research
        </Link>

        <article className="paper-detail">
        <div className="paper-header">
          <div className="paper-image-container">
            <img src={paper.image} alt={paper.title} className="paper-detail-image" />
          </div>
          <div className="paper-header-content">
            <h1>{paper.title}</h1>
            <div className="paper-meta">
              <p><strong>Authors:</strong> {paper.authors}</p>
              {paper.authorDetails && (
                <div style={{ marginTop: '0.5rem' }}>
                  {Object.entries(paper.authorDetails).map(([name, details]) => (
                    <p key={name} style={{ fontSize: '0.9rem', margin: '0.25rem 0', paddingLeft: '1rem' }}>
                      <strong>{name}:</strong> {details.affiliation}
                      {details.email && ` (${details.email})`}
                    </p>
                  ))}
                </div>
              )}
              {paper.institution && !paper.authorDetails && <p><strong>Institution:</strong> {paper.institution}</p>}
              {paper.postedDate && <p><strong>Posted Date:</strong> {paper.postedDate}</p>}
              <p><strong>Year:</strong> {paper.year}</p>
              <p><strong>Venue:</strong> {paper.venue}</p>
              {paper.doi && (
                <p>
                  <strong>DOI:</strong>{' '}
                  <a 
                    href={`https://doi.org/${paper.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    {paper.doi}
                  </a>
                </p>
              )}
              {paper.citations && <p><strong>Citations:</strong> {paper.citations}</p>}
              {paper.arxivId && (
                <p>
                  <strong>arXiv:</strong>{' '}
                  <a 
                    href={paper.arxivUrl || `https://arxiv.org/abs/${paper.arxivId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    arXiv:{paper.arxivId}
                  </a>
                </p>
              )}
              {paper.conference && <p><strong>Conference:</strong> {paper.conference}</p>}
              {paper.website && (
                <p>
                  <strong>Website:</strong>{' '}
                  <a 
                    href={paper.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    Visit Project Website
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="paper-content">
          <section className="paper-section">
            <h2>Abstract</h2>
            <p>{paper.abstract}</p>
          </section>

          {paper.id === 'alignment-quality-index' && <AlignmentQualityIndex />}

          {paper.id === 'systems-engineering-llm' && <SystemsEngineeringLLM />}

          {paper.id === 'kan-autoencoders' && <KANAutoencoders />}

          {paper.id === 'bitcoin-risk-factors' && <BitcoinRiskFactors />}

          {paper.id === 'transformer-ethereum' && <TransformerEthereum />}

          {paper.id === 'brainvoxgen' && <BrainVoxGen />}

          <section className="paper-section">
            <h2>Keywords</h2>
            <p className="keywords">{paper.keywords}</p>
          </section>
        </div>
      </article>
    </div>
    </>
  );
};

export default PaperDetail;

