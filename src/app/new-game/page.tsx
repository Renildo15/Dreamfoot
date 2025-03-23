"use client";

import { createCoach } from "@/hooks/coach.hook";
import { FormationType, TacticsType } from "@/types/coach";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import countries from "@/data/countries.json"
import { formations, tactics } from "@/data";

export default function NewGame() {
    const [coachName, setCoachName] = useState('');
    const [nationality, setNationality] = useState('');
    const [formation, setFormation] = useState<FormationType>(FormationType.FIVE_THREE_TWO)
    const [tactic, setTactic] = useState<TacticsType>(TacticsType.BALANCED);

    const router = useRouter();

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!coachName.trim()) {
            alert("Por favor, insira um nome para o técnico.");
            return;
        }

        try {
            const newCoach = await createCoach({ name: coachName, nationality, preferenceFormation: formation, tactics:tactic });

            if (!newCoach) throw new Error("Erro ao iniciar novo jogo");

            alert("Técnico criado!");
            router.push("/");
        } catch (error) {
            console.error(error);
            alert("Falha ao iniciar o jogo.");
        }
    }

    const handleNationalityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNationality(event.target.value)
    }
    const handleFormation = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormation(event.target.value as FormationType)
    }

    const handleTactic = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTactic(event.target.value as TacticsType)
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center border border-amber-200 p-6 w-full max-w-md rounded-lg shadow-md">
                <h1 className="text-xl font-bold">Criar Novo Jogo</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <label className="w-full">
                        <span className="block mb-1 text-sm font-medium">Nome do Técnico</span>
                        <input
                            type="text"
                            placeholder="Digite o nome do técnico"
                            className="input input-md w-full px-3 py-2 border rounded"
                            value={coachName}
                            onChange={(e) => setCoachName(e.target.value)}
                        />
                    </label>
                    <select 
                        value={nationality}
                        onChange={handleNationalityChange}
                        className="select w-full"
                    >
                        <option disabled={true}>Nacionalidade</option>
                        {countries.map((country => (
                            <option key={country.name}>
                               {country.name}
                            </option>
                        )))}
                        
                    </select>
                    <select 
                        value={formation}
                        onChange={handleFormation} 
                        className="select w-full"
                    >
                        <option disabled={true}>Formação</option>
                        {formations.map((formation => (
                            <option key={formation.formation} value={formation.name}>{formation.formation}</option>
                        )))}
                       
                    </select>
                    <select 
                        value={tactic}
                        onChange={handleTactic} 
                        className="select w-full"
                    >
                        <option disabled={true}>Tática</option>
                        {tactics.map((tactic => (
                            <option key={tactic.name} value={tactic.slug}>{tactic.name}</option>
                        )))}
                    </select>
                    <button 
                        type="submit" 
                        className="btn btn-accent w-full py-2 text-white font-semibold rounded"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}
