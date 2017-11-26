export default injects => `<mjml>
  <mj-body>
    <mj-container background-color="#E1E8ED">
      <mj-section background-color="white">
        <mj-column>
          <mj-image padding="0px" border="0.5px solid grey" border-radius="100" width="125" src="https://framapic.org/B9eoojBmoEcl/w08MHVwRQ5pJ.png"></mj-image>
        </mj-column>
      </mj-section>
      
      <mj-section padding-bottom="0" background-color="#fcfcfc">
        <mj-column width="100%">
          <mj-text align="center" font-size="20" color="grey" font-family="Helvetica Neue" font-weight="200">
            Les 4 derniers articles du mois
          </mj-text>
          <mj-divider horizontal-spacing="0" vertical-spacing="0" padding-top="20" padding-bottom="0" padding-left="0" padding-right="0" border-width="1px" border-color="#f8f8f8" />
        </mj-column>
      </mj-section>

      <mj-section background-color="white">
        ${injects.articles.map(article => `<mj-column width="50%">
             <mj-image border="0.5px solid grey" width="300" height="180" srcset="${article.image}"></mj-image>
             <mj-text>
                 <a href="${article.href}">${article.title} - ${article.tag}</a>
             </mj-text>
         </mj-column>`)}
      </mj-section>

      <mj-section background-color="white">
        <mj-section background-color="#f3f3f3">
          <mj-column>
            <mj-button font-weight="bold" background-color="#f45e43" color="white" href="https://blog.ston3o.me">Voir le blog de ston3o →</mj-button>
          </mj-column>
        </mj-section>

        <mj-section background-color="#">
          ${injects.networks.map(network => `<mj-group>
              <mj-column>
                  <mj-image padding="0px" width="32" src="${network.image}" href="${network.href}"></mj-image>
              </mj-column>
          </mj-group>`)}
        </mj-section>
        
        <mj-section background-color="#f3f3f3">
          <mj-text align="center">
            <a href="#">Se désabonner de cette newsletter</a>
          </mj-text>
        </mj-section>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`;
