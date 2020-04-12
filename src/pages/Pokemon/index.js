import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { CircularProgressbarWithChildren  } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import Container from '../../components/Container/index'
import Menu from '../../components/Menu/index'
import { PokeInformation, PokeMenu , PokeErrorBox, PokeError, PokeErrorText, PokeLoadingBox, PokeLoading, PokeLoadingText, PokeProfile, PokeImage, PokeBasic, PokeProfileInfo, PokeOrder, PokeName, PokeWeight, PokeWeightTitle, PokeWeightValue, PokeType, PokeTypeTitle, PokeTypeList, PokeTypeItem, PokeTab, PokeAbility, PokeAbilityTitle, PokeAbilityEffect, PokeAbilityEffectEntries, PokeAbilityEffectEntriesDetail, PokeForm, PokeFormItem, PokeStat, PokeStatItem, PokeStatValues, PokeStatBase, PokeStatName, PokeEvolution, PokeEvolutionItem, PokeEvolutionContentImage, PokeEvolutionImage, PokeEvolutionName } from './styles'

import pokeloading from '../../assets/images/loading-pokemon.gif'
import pokeerror from '../../assets/images/error-response.gif'

import api from '../../services/api'
import axios from 'axios'

function TabPanel(props) {
    const { children, value, index, ...other } = props
  
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}
  
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}
  
export default function Pokemon({ match }) {
    
    const theme = useTheme()
    const [value, setValue] = useState(0)

    const [errorResult, setErrorResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [ability, setAbility] = useState([])
    const [evolutions, setEvolutions] = useState([])
    const [forms, setForms] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    async function pokemonResults() {
        if (match.params.search === undefined) {
            alert('indefinido')
        } else {
            setLoading(true)
            await api.get(`/api/v2/pokemon/${match.params.search}`)
                .then(response => {
                    const data = []
                    data.push(response.data)
                    setResults(data)
                    abilityInfo(data)
                    data.map(obj => {
                        formsInfo(obj.id)
                        specieInfo(obj.id)
                        return obj
                    })    
                    setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
                })
                .catch(error => {
                    setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
                    console.log(error)
                    setErrorResult(true)
                })
        }
    }

    async function specieInfo(id) {
        setLoading(true)
            await api.get(`/api/v2/pokemon-species/${id}`)
                .then(response => {
                    const data = []
                    data.push(response.data)
                    data.map(obj => evolutionInfo(obj.evolution_chain.url))
                    setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
                })
                .catch(error => {
                    setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
                    console.log(error)
                    setErrorResult(true)
                })
    }

    async function abilityInfo(abilities) {
        setLoading(true)
        let urls = []
        abilities.map(abilities => {
            abilities.abilities.map(ability => {
                urls.push(ability.ability.url)
                return ability
            })
            return abilities
        })

        let ability = []
        for (const [i, url] of urls.entries()) {
            await axios.get(url)
                .then(response => {
                    ability.push(response.data)
                    setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
                    return i
                })
                .catch(error => {
                    setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
                    console.log(error)
                })
        }
        setAbility(ability)
    }

    async function formsInfo(id) {
        setLoading(true)
        await api.get(`/api/v2/pokemon-form/${id}`)
            .then(response => {
                let data = []
                data.push(response.data)
                setForms(data)
                setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
            })
            .catch(error => {
                setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
            })
    }

    async function evolutionInfo(url) {
        setLoading(true)
        await axios.get(url)
            .then(response => {
                let data = []
                data.push(response.data)
                setEvolutions(data)
                console.log(data)
                setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
            })
            .catch(error => {
                setTimeout(
                    function() {
                        setLoading(false)
                    }, 5000) 
            })
    }

    useEffect(() => {
        pokemonResults()
    }, [])
    
    return (
        <Container style={loading ? {background: '#c5b6f2'} : null }>
            <PokeInformation >
                {
                    errorResult
                    ?
                        <PokeErrorBox>
                            <PokeError src={pokeerror} />
                            <PokeErrorText>Sorry, an error occurred</PokeErrorText>
                            <PokeErrorText>Please access or button below and search for another Pokémon</PokeErrorText>
                            <a href="/Catalog">Search New Pokémon</a>
                        </PokeErrorBox>
                    :
                        loading
                        ?
                            <PokeLoadingBox>
                                <PokeLoading src={pokeloading} />
                                <PokeLoadingText>Loading Information of Pokemon... Please Wait</PokeLoadingText>
                            </PokeLoadingBox>
                        :
                            <>
                                <PokeMenu id="menuPokemon">
                                    <Menu />
                                </PokeMenu>
                                {
                                    results.map((poke, i) => (
                                        <PokeProfile id="PokeProfile" key={i}>
                                            <PokeImage id="PokeImage" src={poke.sprites.front_default} alt={poke.name} />
                                            <PokeBasic id="PokeBasic">
                                                <PokeProfileInfo>
                                                    <PokeOrder id="PokeOrder">#{poke.order}</PokeOrder>
                                                    <PokeName id="PokeName">{poke.name}</PokeName>
                                                </PokeProfileInfo>
                                                <PokeWeight id="PokeWeight">
                                                    <PokeWeightTitle id="PokeWeightTitle">Weight</PokeWeightTitle>
                                                    <PokeWeightValue id="PokeWeightValue">{poke.weight} Kg</PokeWeightValue>
                                                </PokeWeight>
                                                <PokeType id="PokeType">
                                                    <PokeTypeTitle id="PokeTypeTitle">Type</PokeTypeTitle>
                                                    <PokeTypeList>
                                                        {
                                                            poke.types.map((type, i) => (
                                                                <PokeTypeItem id="PokeTypeItem" key={i}>{type.type.name}</PokeTypeItem>
                                                            ))
                                                        }
                                                    </PokeTypeList>
                                                </PokeType>
                                            </PokeBasic>
                                        </PokeProfile>
                                    ))
                                }

                                <PokeTab>
                                    <AppBar position="static" color="default">
                                        <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                        aria-label="full width tabs example"
                                        >
                                        <Tab label="ABILITY" {...a11yProps(0)} />
                                        <Tab label="FORMS" {...a11yProps(1)} />
                                        <Tab label="STATS" {...a11yProps(2)} />
                                        <Tab label="EVOLUTIONS" {...a11yProps(3)} />
                                        </Tabs>
                                    </AppBar>
                                    <SwipeableViews
                                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={value}
                                        onChangeIndex={handleChangeIndex}
                                    >

                                        <TabPanel id="TabPanel" value={value} index={0} dir={theme.direction}>
                                            {
                                                ability.map((ability, i) => (
                                                    <PokeAbility id="PokeAbility" key={i}>
                                                        <PokeAbilityTitle key={i}>{ability.name}</PokeAbilityTitle>
                                                        {
                                                            ability.effect_changes.map((effect_changes, i) => (
                                                                <div key={i}>
                                                                    <PokeAbilityEffect>{effect_changes.version_group.name}</PokeAbilityEffect>
                                                                    <PokeAbilityEffectEntries>{effect_changes.effect_entries.effect}</PokeAbilityEffectEntries>
                                                                    {effect_changes.effect_entries.map((effect_entries, i) => (
                                                                        effect_entries.language.name === "en"
                                                                        ?
                                                                            <PokeAbilityEffectEntriesDetail key={i}>{effect_entries.effect}</PokeAbilityEffectEntriesDetail>
                                                                        :
                                                                            null
                                                                    ))}
                                                                </div>
                                                            ))
                                                        }
                                                    </PokeAbility>
                                                ))
                                            }
                                        </TabPanel>

                                        <TabPanel id="TabPanel" value={value} index={1} dir={theme.direction}>
                                            {
                                                forms.map((form, i) => (
                                                    form.form_names.length === 0
                                                    ?
                                                        <p key={i}>No registered form</p>
                                                    :
                                                        null
                                                ))
                                            }
                                            <PokeForm>
                                                {
                                                    forms.map((form, i) => (
                                                        form.form_names.map((form_names, i) => (
                                                            form_names.language.name === "en"
                                                            ?
                                                                <PokeFormItem key={i}>{form_names.name}</PokeFormItem>
                                                            :
                                                                null
                                                        ))
                                                    ))
                                                }
                                                {
                                                    forms.map((form, i) => (
                                                        i === 0
                                                        ?
                                                            form.form_names.map((form_names, i) => (
                                                                i === 0
                                                                ?
                                                                    form.names.map((names, i) => (
                                                                        <PokeFormItem key={i}>{names.name}</PokeFormItem>
                                                                    ))
                                                                :
                                                                    null
                                                            ))
                                                        :
                                                            null
                                                    ))
                                                }
                                            </PokeForm>
                                        </TabPanel>

                                        <TabPanel id="TabPanelStats" value={value} index={2} dir={theme.direction}>
                                            <PokeStat id="PokeStat">
                                                {
                                                    results.map((poke, i) => (
                                                        poke.stats.map((stats, i) => (
                                                            <PokeStatItem key={i}>
                                                                <CircularProgressbarWithChildren value={stats.base_stat} maxValue={255} style>
                                                                    <PokeStatValues>
                                                                        <PokeStatBase>{stats.base_stat}</PokeStatBase>
                                                                        <PokeStatName>{stats.stat.name}</PokeStatName>
                                                                    </PokeStatValues>
                                                                </CircularProgressbarWithChildren>
                                                            </PokeStatItem>
                                                        ))
                                                    ))
                                                }
                                            </PokeStat>
                                        </TabPanel>

                                        <TabPanel id="TabPanel" value={value} index={3} dir={theme.direction}>
                                            {
                                                evolutions.map((evolution, i) => (
                                                    <PokeEvolution key={i}>
                                                    <PokeEvolutionItem>
                                                        <PokeEvolutionContentImage>
                                                            <PokeEvolutionImage src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${evolution.chain.species.name}.gif`} alt={evolution.chain.species.name}/>
                                                        </PokeEvolutionContentImage>
                                                        <PokeEvolutionName>{evolution.chain.species.name}</PokeEvolutionName>
                                                    </PokeEvolutionItem>
                                                    {
                                                        evolution.chain.evolves_to.map((evolves_to, i) => (
                                                            <>
                                                                <PokeEvolutionItem key={i}>
                                                                    <PokeEvolutionContentImage>
                                                                        <PokeEvolutionImage src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${evolves_to.species.name}.gif`} alt={evolves_to.species.name} />
                                                                    </PokeEvolutionContentImage>
                                                                    <PokeEvolutionName>{evolves_to.species.name}</PokeEvolutionName>
                                                                </PokeEvolutionItem>
                                                                {
                                                                    evolves_to.evolves_to.map((evolves_to_, i) => (
                                                                        <PokeEvolutionItem key={i}>
                                                                            <PokeEvolutionContentImage>
                                                                                <PokeEvolutionImage src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${evolves_to_.species.name}.gif`} alt={evolves_to_.species.name} />
                                                                            </PokeEvolutionContentImage>
                                                                            <PokeEvolutionName>{evolves_to_.species.name}</PokeEvolutionName>
                                                                        </PokeEvolutionItem>
                                                                    ))
                                                                }
                                                            </>
                                                        ))
                                                    }
                                                    </PokeEvolution>
                                                ))
                                            }
                                        </TabPanel>

                                    </SwipeableViews>
                                </PokeTab>
                            </>
                }
            </PokeInformation>
            
        </Container>
    )
}