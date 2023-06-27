import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ScaleTelekomAppShell, ScaleTelekomHeader, ScaleTelekomNavList, ScaleTelekomNavItem, 
  ScaleTelekomFooter,
  ScaleTelekomFooterContent,
  ScaleTelekomFooterExtendedNavigation,
  ScaleTelekomFooterExtendedNavigationColumn,
  ScaleGrid,
  ScaleGridItem,
  ScaleCard,
  ScaleList,
  ScaleListItem,
  ScaleRatingStars,
  ScaleProgressBar,
  ScaleRadioButtonGroup,
  ScaleRadioButton

} from '@telekom/scale-components-react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScaleTelekomAppShell>

        <ScaleTelekomHeader slot="header">
          <ScaleTelekomNavList slot="main-nav" aria-label="Main Navigation Links">
            <ScaleTelekomNavItem aria-label="Topic One">
              <a href="#">Topic One</a>
            </ScaleTelekomNavItem>
          </ScaleTelekomNavList>
        </ScaleTelekomHeader>
          <ScaleGrid className="content">
            <ScaleGridItem>
              <ScaleCard to="https://example.com" target="_blank">
              <div style={{margin: '-24px'}}>
                <img
                  style={{marginBottom: '-4px', width:'100%'}}
                  src="https://picsum.photos/298/148"
                  alt="placeholder"
                />
                <div style={{padding: '24px'}}> 
                  <h4 style={{margin: '0px 0 16px 0', font: 'var(--telekom-text-style-heading-4)'}}>Blogpost Title </h4>
                  <span>Lorem ipsur dolor sit amet</span>
                </div>
              </div>                
              </ScaleCard>
              <ScaleList ordered>
                <ScaleListItem>Lorem ipsum dolor</ScaleListItem>
                <ScaleListItem
                  >Sit amet
                  <ScaleList ordered>
                    <ScaleListItem>Elementum nibh</ScaleListItem>
                    <ScaleListItem
                      >Penatibus et magnis
                      <ScaleList ordered>
                        <ScaleListItem>Nulla facilisi</ScaleListItem>
                        <ScaleListItem>Aliquam etiam</ScaleListItem>
                      </ScaleList>
                    </ScaleListItem>
                  </ScaleList>
                </ScaleListItem>
                <ScaleListItem>Consetetur sadipscing</ScaleListItem>
              </ScaleList>
            </ScaleGridItem>
            <ScaleGridItem>
              <ScaleCard to="https://example.com" target="_blank">
              <div style={{margin: '-24px'}}>
                <img
                  style={{marginBottom: '-4px', width:'100%'}}
                  src="https://picsum.photos/298/148"
                  alt="placeholder"
                />
                <div style={{padding: '24px'}}> 
                  <h4 style={{margin: '0px 0 16px 0', font: 'var(--telekom-text-style-heading-4)'}}>Blogpost Title </h4>
                  <span>Lorem ipsur dolor sit amet</span>
                </div>
              </div>                
              </ScaleCard>
              <div
                className="rating-stars"
              >
                <ScaleRatingStars
                  rating="3"
                  label="Custom Rating Label"
                >
                </ScaleRatingStars>
              </div>
            </ScaleGridItem>
            <ScaleGridItem>
              <ScaleCard to="https://example.com" target="_blank">
              <div style={{margin: '-24px'}}>
                <img
                  style={{marginBottom: '-4px', width:'100%'}}
                  src="https://picsum.photos/298/148"
                  alt="placeholder"
                />
                <div style={{padding: '24px'}}> 
                  <h4 style={{margin: '0px 0 16px 0', font: 'var(--telekom-text-style-heading-4)'}}>Blogpost Title </h4>
                  <span>Lorem ipsur dolor sit amet</span>
                </div>
              </div>                
              </ScaleCard>
              <div className='radio-button-group'>
                <ScaleRadioButtonGroup label="Group Label">
                  <ScaleRadioButton
                    label="Radio Label"
                    name="standard"
                    input-id="choice-0"
                    value="0"
                  ></ScaleRadioButton>
                  <ScaleRadioButton
                    label="Radio Label"
                    name="standard"
                    input-id="choice-1"
                    value="1"
                  ></ScaleRadioButton>
                  <ScaleRadioButton
                    label="Radio Label"
                    name="standard"
                    input-id="choice-2"
                    value="2"
                  ></ScaleRadioButton>
                </ScaleRadioButtonGroup>  
              </div>            
            </ScaleGridItem>    
            <ScaleGridItem>
              <ScaleCard to="https://example.com" target="_blank">
              <div style={{margin: '-24px'}}>
                <img
                  style={{marginBottom: '-4px', width:'100%'}}
                  src="https://picsum.photos/298/148"
                  alt="placeholder"
                />
                <div style={{padding: '24px'}}> 
                  <h4 style={{margin: '0px 0 16px 0', font: 'var(--telekom-text-style-heading-4)'}}>Blogpost Title </h4>
                  <span>Lorem ipsur dolor sit amet</span>
                </div>
              </div>                
              </ScaleCard>
              <ScaleProgressBar
                percentage="100"
                label="Completed"
                status-description="Upload complete"
                show-status="true"
              >
              </ScaleProgressBar>
            </ScaleGridItem>                                    
          </ScaleGrid>
        <ScaleTelekomFooter slot="footer">
          <ScaleTelekomFooterContent>
            <span slot="notice"> © Deutsche Telekom AG </span>
            <ul slot="navigation">
              <li>
                <a href="#"> Imprint </a>
              </li>
              <li>
                <a href="#"> Data privacy </a>
              </li>
              <li>
                <a href="#"> Terms and conditions </a>
              </li>
              <li>
                <a href="#"> Consumer protection </a>
              </li>
              <li>
                <a href="#"> Product information sheet </a>
              </li>
              <li>
                <a href="#"> Youth protection </a>
              </li>
            </ul>
          </ScaleTelekomFooterContent>
        </ScaleTelekomFooter>
      </ScaleTelekomAppShell>
    </>
  )
}

export default App
