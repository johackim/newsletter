export default articles => `<mjml>
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
        ${articles.map(article => `<mj-column width="50%">
             <mj-image border="0.5px solid grey" width="300" src="${article.image}"></mj-image>
             <mj-text align="center">
                 <a href="${article.href}">${article.title}</a>
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
          <mj-group>
            <mj-column>
              <mj-image padding="0px" width="32" src="https://framapic.org/LuNxgPKriP7Y/GoJUuL8JbFUs.png" href="https://mastodon.xyz/@ston3o"></mj-image>
            </mj-column>
            <mj-column>
              <mj-image padding="0px" width="32" src="https://framapic.org/LhM5Ns1HMPvZ/tW8rRNReFDiQ.png" href="https://www.reddit.com/user/ston3o/"></mj-image>
            </mj-column>
            <mj-column>
              <mj-image padding="0px" width="32" src="https://framapic.org/I3PGiFKj7jx3/dCKwGTFFwqD5.png" href="https://codepen.io/ston3o/"></mj-image>
            </mj-column>
            <mj-column>
              <mj-image padding="0px" width="32" src="https://framapic.org/r7H25mhVmIpw/8zJemB3ngT3g.png" href="https://github.com/ston3o/"></mj-image>
            </mj-column>
            <mj-column>
              <mj-image padding="0px" width="32" src="https://framapic.org/2xNVpxt4UyQW/2THi8b4hKw5w.png" href="https://twitter.com/ston3o"></mj-image>
            </mj-column>
            <mj-column>
              <mj-image padding="0px" width="32" src="https://framapic.org/KTcb563pvwPa/Sm0hDdOJSBLA.png" href="https://news.ycombinator.com/submitted?id=ston3o"></mj-image>
            </mj-column>
          </mj-group>
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
