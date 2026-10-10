import React from 'react';

const AlignmentQualityIndex = () => {
  return (
    <>
      <section className="paper-section">
        <h2>Problem Statement</h2>
        <p>This paper argues that common <strong>behavior-based alignment metrics</strong> (refusal rate, toxicity classifiers, LLM judges / G-Eval) can miss "hidden" misalignment because models may <strong>look compliant in outputs</strong> while still encoding unsafe tendencies internally. This manifests in several ways:</p>
        <ul>
          <li><strong>Jailbreak vulnerability:</strong> Models can be tricked into producing unsafe outputs despite appearing aligned</li>
          <li><strong>Stochastic decoding instability:</strong> Alignment can vary significantly with different decoding parameters</li>
          <li><strong>Alignment faking:</strong> Models may produce safe-looking outputs while maintaining unsafe internal representations</li>
        </ul>
        <p>To address this, the paper proposes an <strong>intrinsic, decoding-invariant</strong> diagnostic that looks directly at <strong>latent representations</strong> rather than surface-level outputs.</p>
      </section>

      <section className="paper-section">
        <h2>Core Idea: Alignment Quality Index (AQI)</h2>
        <p><strong>AQI measures how cleanly the model separates "safe" vs "unsafe" prompts in latent activation space.</strong></p>
        
        <h3>Methodology</h3>
        <ol>
          <li>Collect hidden activations for a set of safe prompts (X<sub>S</sub>) and unsafe prompts (X<sub>U</sub>)</li>
          <li>Build a pooled embedding from multiple layers (often using post-MLP / post-GELU activations), rather than relying on the last layer which may be "over-smoothed" or compressed</li>
          <li>Compute clustering-quality indices over the pooled embeddings</li>
        </ol>

        <h3>Clustering Metrics</h3>
        <p><strong>Xie–Beni Index (XBI):</strong> Favors <strong>compact clusters</strong> that are <strong>well separated</strong> (lower is better).</p>
        <p><strong>Calinski–Harabasz Index (CHI):</strong> Favors strong <strong>between-cluster dispersion</strong> relative to within-cluster dispersion (higher is better).</p>

        <h3>Composite AQI Score</h3>
        <p>The final score combines both metrics:</p>
        <div className="formula">
          AQI = λ · (1/XBI) + (1-λ) · CHI
        </div>
        <p>where λ trades off "local compactness" vs "global separation" (default λ = 0.5). <strong>Higher AQI = better latent separation = stronger alignment signal.</strong></p>
      </section>

      <section className="paper-section">
        <h2>Layerwise Pooling</h2>
        <p>Instead of picking one layer, the method learns attention weights α(l) over layers to form:</p>
        <div className="formula">
          h̃(x,y) = Σ<sub>l=1</sub><sup>L</sup> α(l)h<sup>(l)</sup>(x,y)
        </div>
        <p>with a separation/contrastive-style loss that pushes safe and unsafe pooled embeddings apart. The method suggests using <strong>Sparsemax / entmax</strong> so the weighting focuses on a few informative layers (often mid-to-deep layers), avoiding the over-smoothing issues of final-layer representations.</p>
      </section>

      <section className="paper-section">
        <h2>LITMUS Dataset</h2>
        <p>The paper introduces <strong>LITMUS</strong>, a diagnostic dataset with <strong>10,000 one-line prompts</strong>:</p>
        <ul>
          <li><strong>5,000 safe prompts:</strong> Sourced from MMLU-style benign prompts</li>
          <li><strong>5,000 unsafe prompts:</strong> Curated from safety/alignment corpora; categories include violence, hate, illegal activity, explicit content, etc.</li>
        </ul>
        <p><strong>Purpose:</strong> Test whether alignment survives <strong>jailbreaks, fine-tuning drift, and decoding randomness</strong>.</p>
      </section>

      <section className="paper-section">
        <h2>Key Contributions</h2>
        <ul>
          <li><strong>Alignment Quality Index (AQI):</strong> A novel geometric and prompt-invariant metric that empirically assesses LLM alignment by analyzing the separation of safe and unsafe activations in latent space.</li>
          <li><strong>Decoding-Invariant Evaluation:</strong> AQI operates entirely on internal model activations, making it robust to paraphrasing, decoding strategies, and adversarial misalignment.</li>
          <li><strong>Layer-Aware Semantics:</strong> AQI aggregates activations across informative layers to form semantically aligned embeddings, capturing alignment signals that emerge in intermediate MLP activations.</li>
          <li><strong>Geometric Fidelity:</strong> Uses principled, unsupervised cluster quality indices to measure intra-class compactness and inter-class separation.</li>
          <li><strong>LITMUS Dataset:</strong> A comprehensive dataset to facilitate robust evaluation under challenging conditions.</li>
          <li><strong>Early Warning System:</strong> AQI serves as an early warning signal for alignment faking, offering behavior-agnostic safety auditing capabilities.</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Applications</h2>
        <ul>
          <li><strong>Jailbreak Detection:</strong> AQI can detect hidden misalignments and jailbreak risks even when outputs appear compliant, revealing vulnerabilities missed by refusal metrics.</li>
          <li><strong>Alignment Faking Detection:</strong> Serves as an early warning signal for models that appear aligned on the surface but have misaligned internal representations.</li>
          <li><strong>Stochasticity Analysis:</strong> Evaluates alignment stability under stochastic generation, identifying models susceptible to alignment drift.</li>
          <li><strong>Fine-tuning Monitoring:</strong> Tracks alignment quality during model fine-tuning, helping preserve safety-critical parameters.</li>
          <li><strong>Model Comparison:</strong> Enables comparison of alignment quality across different training methods (DPO, GRPO, RLHF) and model architectures.</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Empirical Results</h2>
        <p>Empirical tests on the LITMUS dataset across different models trained under DPO, GRPO, and RLHF conditions demonstrate:</p>
        
        <h3>Correlation with External Evaluators</h3>
        <p>AQI correlates reasonably with external evaluators (G-Eval / judge scores) <strong>in normal settings</strong>.</p>

        <h3>Surfacing Hidden Misalignment</h3>
        <p>More importantly, AQI is designed to surface cases where surface metrics are fooled:</p>
        <ol>
          <li><strong>Jailbreak variants:</strong> Can improve judge scores while AQI stays low → suggests "latent entanglement" remains even when outputs appear safe.</li>
          <li><strong>Safety-agnostic fine-tuning:</strong> Benign task data (like ShareGPT/OpenOrca) can keep outputs looking fine while AQI drops → early warning for alignment drift / forgetting.</li>
          <li><strong>Decoding temperature changes:</strong> Can swing judge scores significantly, while AQI stays relatively stable → supports "decoding-invariant" claim.</li>
        </ol>

        <h3>Additional Findings</h3>
        <ul>
          <li>Ability to reveal vulnerabilities missed by refusal metrics</li>
          <li>Robustness to adversarial prompting and paraphrasing</li>
          <li>Effectiveness in detecting alignment faking and jailbreak attempts</li>
          <li>Performance across various model sizes, from small models (TinyLLaMA) to large models (LLaMA 65B)</li>
          <li>Smaller models exhibit substantial AQI collapse under adversarial prompting, while larger models maintain stronger separation</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Key Insights</h2>
        <ul>
          <li>Alignment signals emerge gradually across layers, with deeper layers showing clearer separation between safe and unsafe activations</li>
          <li>Smaller models exhibit substantial AQI collapse under adversarial prompting, while larger models maintain stronger separation</li>
          <li>LoRA fine-tuning can distort alignment geometry, requiring careful regularization of alignment-critical parameters</li>
          <li>Mixture-of-Experts models show expert-specific alignment variance, with some experts preserving separation better than others</li>
          <li>AQI provides causal attribution capabilities, enabling localization of alignment degradation during fine-tuning</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>Limitations</h2>
        <p>The authors are explicit about several key limitations:</p>
        <ul>
          <li><strong>Clusterability assumption:</strong> Assumes "safe vs unsafe" forms <strong>clusterable geometry</strong> in latent space, which may not always hold</li>
          <li><strong>Binary classification:</strong> Uses <strong>binary labels</strong>, which may miss nuanced/graded harms</li>
          <li><strong>Outlier sensitivity:</strong> Sensitive to <strong>outliers</strong> and batch composition</li>
          <li><strong>Cross-model calibration:</strong> <strong>Cross-model calibration</strong> is hard (AQI=0.7 in one model may not mean the same in another)</li>
          <li><strong>Computational overhead:</strong> <strong>Activation/memory overhead</strong> can be heavy for large models</li>
          <li><strong>Causal localization:</strong> Doesn't automatically provide <strong>causal localization</strong> (where the misalignment comes from), only flags it</li>
          <li><strong>Evasion risks:</strong> Might be evaded by <strong>stealth / distribution-shift</strong> attacks</li>
        </ul>
      </section>
    </>
  );
};

export default AlignmentQualityIndex;

