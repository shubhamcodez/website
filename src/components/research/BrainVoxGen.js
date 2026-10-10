import React from 'react';

const BrainVoxGen = () => {
  return (
    <>
      <section className="paper-section">
        <h2>Summary</h2>
        <p>BrainVoxGen proposes a deep-learning framework for synthesizing three-dimensional (3D) brain MRI volumes from corresponding 3D ultrasound (US) images using a modified Pix2Pix Generative Adversarial Network (GAN) architecture. The motivation behind this work is to bridge the significant modality gap between ultrasound and MRI in neuroimaging, enabling the extraction of richer anatomical and diagnostic information from ultrasound data while avoiding the cost, accessibility constraints, and contraindications associated with MRI.</p>
      </section>

      <section className="paper-section">
        <h2>Motivation and Background</h2>
        <p>Medical imaging plays a foundational role in diagnosis and treatment planning, particularly in neuroimaging where structural complexity is high. Ultrasound offers real-time, non-invasive, and low-cost imaging, but suffers from low spatial resolution and noise. MRI, in contrast, provides high-resolution soft-tissue contrast but is expensive, less accessible, and unsuitable for certain patients with implants or pacemakers.</p>
        <p>The ability to synthesize MRI-like representations from ultrasound data could therefore substantially improve diagnostic workflows, especially in intraoperative and resource-constrained settings.</p>
        <p>Recent advances in deep learning—particularly generative models—have demonstrated strong performance in image synthesis and image-to-image translation tasks. Generative Adversarial Networks (GANs), and specifically conditional GANs such as Pix2Pix, have shown promise in translating between imaging modalities. However, most prior work has focused on 2D images or relatively simpler anatomical structures, leaving 3D voxel-to-voxel translation of complex brain images largely unexplored.</p>
      </section>

      <section className="paper-section">
        <h2>Related Work</h2>
        <p>The authors situate their work within two primary research streams: deep learning in medical imaging and image-to-image translation and 3D image generation.</p>
        <ul>
          <li>Prior studies have used 3D CNNs and GANs for cross-modal medical image synthesis, such as generating CT images from MRI or synthesizing missing MRI modalities (e.g., FLAIR from T1-weighted images)</li>
          <li>Some works have explored attention mechanisms and transformer-based GANs to enhance feature fusion and segmentation accuracy, particularly for brain tumors</li>
          <li>Advances in 3D-aware generative models—such as pi-GAN, GRAF, and deferred neural rendering—have demonstrated improved view consistency and spatial coherence in general 3D image synthesis tasks</li>
        </ul>
        <p>Despite these advancements, existing methods either rely on paired MRI data, lack true 3D consistency, or do not address the complexity of brain ultrasound-to-MRI translation. BrainVoxGen aims to establish a foundational benchmark for this challenging problem.</p>
      </section>

      <section className="paper-section">
        <h2>Dataset and Preprocessing</h2>
        <p>The study uses a publicly available dataset from the <strong>NIRD / RESECT database</strong>, consisting of preoperative 3D brain MRI and intraoperative ultrasound volumes from 23 glioma patients. A critical requirement for Pix2Pix-style supervised learning is precise voxel-level correspondence between input and target volumes.</p>
        
        <p>To achieve this, the authors apply tumor registration metadata to align ultrasound and MRI volumes. The preprocessing pipeline includes:</p>
        <ul>
          <li><strong>Rotation and axial transformations</strong> to align MRI and ultrasound images into a common coordinate space</li>
          <li><strong>Cropping across all dimensions</strong> to ensure both modalities share identical spatial extents</li>
        </ul>
        <p>This alignment ensures a one-to-one voxel correspondence between ultrasound and MRI volumes, which is essential for supervised voxel-to-voxel translation. Visual comparisons before and after preprocessing confirm successful spatial alignment.</p>
      </section>

      <section className="paper-section">
        <h2>Model Architecture</h2>
        <p>Rather than adopting more complex architectures such as transformers, the authors deliberately use a modified Pix2Pix GAN to demonstrate feasibility. The framework operates directly on 3D volumes.</p>
        
        <h3>Generator</h3>
        <p>The generator is a 3D convolutional neural network that takes ultrasound volumes as input and outputs synthesized MRI volumes. It consists of multiple layers of 3D convolution, down-sampling, and up-sampling operations, enabling hierarchical feature extraction and reconstruction across spatial dimensions.</p>

        <h3>Discriminator</h3>
        <p>The discriminator is also a 3D CNN, composed of convolutional and pooling layers followed by fully connected layers. It outputs a scalar probability indicating whether an input MRI volume is real (ground truth) or fake (generated).</p>

        <p>The training objective combines <strong>adversarial loss</strong> with an <strong>L1 reconstruction loss</strong>, encouraging both perceptual realism and voxel-wise similarity.</p>
      </section>

      <section className="paper-section">
        <h2>Training and Evaluation</h2>
        <p>The model is trained for <strong>70,000 iterations</strong> using partial brain slices due to memory and dataset constraints. Only <strong>18 unique voxels</strong> are available, which are extrapolated to 288 samples of size 128 × 128 × 8, highlighting a major limitation of the study.</p>
        
        <p>Model performance is evaluated using:</p>
        <ul>
          <li>Generator loss</li>
          <li>Discriminator loss</li>
          <li>L1 loss</li>
          <li>Structural Similarity Index (SSIM)</li>
        </ul>

        <p>The discriminator loss shows a consistent downward trend, indicating improving discrimination between real and synthetic MRI volumes, though it plateaus after ~40,000 iterations. The generator loss initially decreases sharply, followed by oscillations before stabilizing—typical behavior in GAN training.</p>

        <p>Both L1 loss and total generator loss decrease exponentially, demonstrating improved voxel-level fidelity. However, qualitative inspection reveals that while some anatomical features are captured, the generated MRI volumes lack strong alignment with ground truth, limiting clinical usability.</p>
      </section>

      <section className="paper-section">
        <h2>Quantitative Results</h2>
        <p>SSIM scores steadily improve throughout training, rising from <strong>0.10 at 10,000 steps to 0.36 at 70,000 steps</strong>. This trend indicates increasing structural similarity between synthesized and real MRI volumes, though absolute values remain low compared to clinically viable standards. The results establish a baseline rather than a deployable solution.</p>
      </section>

      <section className="paper-section">
        <h2>Discussion</h2>
        <p>The authors emphasize that the primary goal of the study is not clinical deployment but <strong>benchmark establishment</strong>. The results demonstrate that GAN-based voxel-to-voxel translation from ultrasound to MRI is feasible, even under severe data and compute constraints.</p>
        
        <p>The discussion highlights several avenues for improvement:</p>
        <ul>
          <li><strong>Expanding dataset size and diversity</strong> to improve generalization</li>
          <li><strong>Incorporating more expressive architectures</strong>, particularly transformers, to better capture long-range spatial dependencies</li>
          <li><strong>Enhancing preprocessing and registration pipelines</strong> to reduce noise and misalignment</li>
          <li><strong>Leveraging larger-scale models and better hardware resources</strong></li>
        </ul>
        <p>Transformer architectures are identified as particularly promising due to their ability to model global context and spatial relationships—critical for accurate neuroimaging synthesis.</p>
      </section>

      <section className="paper-section">
        <h2>Conclusions</h2>
        <p>BrainVoxGen represents an early but meaningful step toward 3D ultrasound-to-MRI synthesis for brain imaging. Despite limitations in data availability, resolution, and output fidelity, the study demonstrates the latent potential of GANs for volumetric medical image generation. The work underscores the importance of improved datasets, advanced architectures, and interdisciplinary collaboration to realize practical applications.</p>
        <p>Ultimately, the framework lays foundational groundwork for future research aimed at:</p>
        <ul>
          <li><strong>Precision medicine</strong></li>
          <li><strong>Improved intraoperative imaging</strong></li>
          <li><strong>Enhanced diagnostic support</strong> through AI-driven medical image synthesis</li>
        </ul>
      </section>
    </>
  );
};

export default BrainVoxGen;

