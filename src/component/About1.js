import React from 'react';

export default function About1() {
  return (
    <div className='container' style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className=' px-5 my-3 rounded' style={{backgroundColor: "rgb(80, 107, 142,0.9)",  }}>
      <div className='py-5' style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ border: '2px solid #823a46', borderRadius: '50%', padding: '5px' }}>
          <img src="Prof.jpeg" alt="Profile" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', alignSelf: "center" }} />
        </div>
        <div className='container px-5'>
          <h3 className='fw-bolder fs-1  px-5' style={{ color: '#4d004d', textDecorationOffset: '0.3em',fontFamily:"Cookie" }}>Linjiang Chen</h3>
          <h5 className='px-5 fw-semibold'>Assistant Professor</h5>
          <h6 className='px-5 fw-semibold'>School of Chemistry, University of Birmingham</h6>
          <h6 className='px-5 fw-semibold'>Tel: +44 (0) 121 414 3946</h6>
        </div>
      </div>
      </div>
      <div className=' px-5 my-3 rounded' style={{backgroundColor: "#ffffff" }}>
      <div className='container'>
        <h4 className='fw-semibold text-decoration-underline' style={{ color: '#808080', textDecorationOffset: '0.3em' }}>Education:</h4>
        <ul>
          <li className='fw-medium'>BEng in Materials Science and Engineering, Beihang University, 2009</li>
          <li className="fw-medium">MEng in Materials Science and Engineering, Queen Mary University of London, 2009</li>
          <li className="fw-medium">PhD in Molecular Modelling, University of Edinburgh, 2014</li>
        </ul>
        <h4 className='fw-semibold text-decoration-underline' style={{ color: '#808080', textDecorationOffset: '0.3em' }}>Research:</h4>
        <ul>
          <li className="fw-medium">Computational discovery and design of functional molecules and materials at the atomic scale</li>
          <li className="fw-medium">Automated and autonomous approaches to large-scale, high-throughput computational screening</li>
          <li className="fw-medium">Machine/deep learning augmented molecular modelling that tackles size and complexity challenges</li>
          <li className="fw-medium">Data-driven, adaptive design of experiments, using Bayesian optimization, evolutionary algorithms, and recommender systems</li>
          <li className="fw-medium">Interactive data visualization improving human interpretability of high-dimensional structure–property–function correlations in big chemical data</li>
          <li className="fw-medium">Machine/deep learning augmented molecular modelling that tackles size and complexity challenges</li>
          <li className="fw-medium">Applied artificial intelligence (AI) for chemistry:</li>
          <ul>
            <li className="fw-medium">intelligent high-throughput screening with heuristic techniques</li>
            <li className="fw-medium">deconvolution of complex, multivariate relationships in (big) chemical data</li>
            <li className="fw-medium">predictive and explainable graph neural networks for molecules and materials</li>
            <li className="fw-medium">semantic AI ‘chemists’ extracting latent knowledge from literature and hypothesizing new research</li>
            <li className="fw-medium">automated analysis of lab instrument data, enabled by deep learning</li>
            <li className="fw-medium">generative learning for inverse design of functional molecules and materials</li>
          </ul>
        </ul>
      </div>
      <div className='container'>
        <h4 className='fw-semibold text-decoration-underline' style={{ color: '#808080', textDecorationOffset: '0.3em' }}>Biography:</h4>
        <p className="fw-medium">
          Linjiang was awarded his PhD in molecular modelling from the University of Edinburgh in 2014. His thesis was advised by Dr Tina Düren and concerned improving the modelling of gas adsorption in metal–organic frameworks (MOFs) with coordinatively unsaturated metal sites and flexible MOFs.
        </p>
        <p className="fw-medium">From 2013 to 2017, Linjiang was a postdoctoral research associate with Prof Andy Cooper at the University of Liverpool, followed by a research fellow/theme lead position in the Leverhulme Research Centre for Functional Materials Design, until February 2022. While at Liverpool, Linjiang’s research focused on computational studies of porous materials—molecular crystals, covalent organic frameworks (COFs), polymers, and MOFs—for gas adsorption and separation and computational studies of visible-light-driven organic catalysts—small molecules, COFs, and polymers—for water splitting, carbon dioxide reduction, and asymmetric chemical synthesis</p>
        <p className="fw-medium">In March 2022, Linjiang joined the School of Chemistry. From November 2022, he is holding a joint appointment between the Schools of Chemistry and Computer Science, as Assistant Professor of Digital Chemistry.</p>
      </div>
      <div className='container'>
        {/* Additional content */}
      </div>
    </div>
    </div>
  );
}
