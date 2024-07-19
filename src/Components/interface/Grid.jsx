import styled from 'styled-components'

const Grid = styled.div`
    display : grid;
    grid-template-columns : 1fr ;
    grid-template-rows : 1fr;
    height : 100vh;
    width : 100%;
    background-image: radial-gradient( #5763cd -10%, #5862ce -15% , #5862ce -10%, #0e0e16 60%);
    // background-position : 290% ;
`
const GridColumn = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
`
const GridRow = styled.div`
    display : flex;
    flex-direction : column;
    flex-wrap: nowrap;
    height : 100vh;
`
const Span = styled.span`
    border : 1px solid #e3e3ec;
    padding: 0 50px;
    height : 100%;
    opacity : .1;
    border-bottom : none;
`

const Graph = () => {
 return(
        <Grid className="grid">
          <GridColumn className="grid-column" data-v-dcc33c39="">
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
        </GridColumn>
        <GridRow className="grid-row">
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
            <Span data-v-dcc33c39=""></Span>
        </GridRow>
    </Grid>

 )
};
export default Graph